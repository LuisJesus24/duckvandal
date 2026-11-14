import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Piezas aprobadas de la comunidad. Se editan desde /admin (Decap CMS).
const muro = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/muro' }),
  schema: z.object({
    title: z.string(),
    artist: z.string(), // nombre o @, como quiera firmar
    image: z.string(), // ej. /muro/mi-pieza.webp
    alt: z.string(),
    duck: z.enum(['duxter', 'cuakki', 'aco', 'morris', 'enzo']).optional(),
    reto: z.string().optional(), // id de un reto (nombre del archivo)
    link: z.string().url().optional(),
    date: z.coerce.date().default(() => new Date()),
    published: z.boolean().default(true),
  }),
});

const retos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/retos' }),
  schema: z.object({
    title: z.string(),
    text: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { muro, retos };
