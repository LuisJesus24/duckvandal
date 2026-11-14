# Duck Vandal · El Callejón (Astro)

Versión estática del sitio, hecha con Astro.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

- Datos de personajes, extras y quiz: `src/data/crew.ts`
- Diseño global: `src/styles/global.css`
- Arte: `public/art/`

No incluye: modelos 3D, probador 3D ni muro de fan art (requieren backend).

## Marca y comunidad
- `src/data/site.ts`: eslogan, hashtag, canales de envío (Instagram/correo), paleta y retos.
- `src/content/muro/`: piezas aprobadas del muro (una por archivo). Imágenes en `public/muro/`.
- `src/content/retos/`: los retos de la comunidad.
- Páginas nuevas: `/lore/`, `/muro/`, `/marca/`.

## Animaciones
- `src/styles/motion.css`: todo el movimiento (spray en títulos, "slap" de stickers, goteo, neón, transición entre páginas).
- `src/scripts/motion.ts`: revelado al hacer scroll y manchas de spray al hacer clic.
- Con "reducir movimiento" activado en el sistema, el sitio se ve estático.

## Panel de administración (`/admin`)
El dueño sube piezas y edita retos sin tocar código, con Decap CMS.

**En tu compu (para probar):**
```bash
npm run dev     # el sitio
npm run cms     # en otra terminal: servidor local del panel
```
Abre http://localhost:4321/admin/ y entra con "Iniciar sesión". Los cambios se guardan como archivos del proyecto.

**En producción** (para que el dueño lo use desde internet):
1. Sube el proyecto a un repositorio de GitHub (hoy no es un repositorio git).
2. Publica el sitio en Netlify (Cloudflare Pages o Vercel también sirven, pero necesitan un servidor OAuth propio).
3. En `public/admin/config.yml` cambia `repo: TU-USUARIO/duck-vandal-astro` por tu repositorio.
4. En Netlify: Site settings → Access control → OAuth → instala un proveedor de GitHub.
5. Da acceso de escritura al repositorio a quien vaya a administrar. Cada cambio hace un commit y el sitio se vuelve a publicar solo.

**Subir una pieza:** `/admin/` → Muro de la comunidad → ＋ Pieza. Llena título, artista, imagen y descripción, y publica. Imágenes en WebP de máx. 1200 px (~900 KB).
