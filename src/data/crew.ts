export type Duck = {
  id: 'duxter' | 'cuakki' | 'aco' | 'morris' | 'enzo';
  name: string;
  role: string;
  age: string;
  color: string;
  height: string;
  bio: string;
  quote: string;
  cabinaLine: string;
  version: string;
  spotify: string;
  accent: string;
  /** Ilustración principal y miniatura */
  art: string;
  mini: string;
  artSize: [number, number];
  /** Posición (%) dentro del mural de la portada */
  mural: [number, number];
};

export const crew: Duck[] = [
  {
    id: 'duxter', name: 'Duxter', role: 'El líder roto',
    age: '24 años', color: 'Verde', height: '1.79 m',
    bio: 'Grafitero, reservado y leal. Encontró en la pandilla la familia que le faltaba. Usa pasamontañas y suele ser el primero en dar la cara.',
    quote: 'Si alguien pregunta, yo doy la cara.',
    cabinaLine: 'Para salir cuando la ciudad se calla.',
    version: 'Llegué y vi nuestra firma. Antes de preguntarme quién pintó el mural, me pregunté quién sabía que nos juntábamos ahí.',
    spotify: 'https://open.spotify.com/playlist/08Iwn6It30O3wu9edU8HDG',
    accent: '#bdd778', art: '/art/duxter.webp', mini: '/art/duxter-mini.webp', artSize: [810, 1440], mural: [56, 41],
  },
  {
    id: 'cuakki', name: 'Cuakki', role: 'El caos',
    age: '23 años', color: 'Turquesa', height: '1.86 m',
    bio: 'Cantante underground y cofundador de la pandilla. Propuso el nombre Duck Vandal. Se reconoce por los lentes de flama y por bromear cuando algo se pone tenso.',
    quote: 'Si alguien pregunta, yo le puse el nombre.',
    cabinaLine: 'Si te la sabes, cántala más fuerte.',
    version: 'La luz estaba buenísima. Saqué el cel. Aco dice que estorbaba, pero si nadie graba, mañana todos van a contar otra cosa.',
    spotify: 'https://open.spotify.com/playlist/1VeBRe56qhAvHY1KWPlwAf',
    accent: '#77e0dd', art: '/art/cuakki.webp', mini: '/art/cuakki-mini.webp', artSize: [807, 1440], mural: [45, 39],
  },
  {
    id: 'aco', name: 'Aco', role: 'El silencioso',
    age: '22 años', color: 'Blanco', height: '1.90 m',
    bio: 'Peleador de MMA y protector de la pandilla. Con los suyos es irónico. En su retrato oficial aparece con su bull terrier.',
    quote: 'Cuakki. Baja el celular.',
    cabinaLine: 'Lo pongo antes de entrar al ring.',
    version: 'La pintura seguía fresca. Mi perro se quedó oliendo el piso. Ahí vi las huellas y le dije a Cuakki que bajara el celular.',
    spotify: 'https://open.spotify.com/playlist/6WSY03lggtl3bdd6EQpLwB',
    accent: '#ff9a88', art: '/art/aco.webp', mini: '/art/aco-mini.webp', artSize: [807, 1440], mural: [67, 39],
  },
  {
    id: 'morris', name: 'Morris', role: 'El nostálgico',
    age: '19 años', color: 'Gris', height: '1.80 m',
    bio: 'Skater de estética punk Y2K. Le gustan las consolas retro y la adrenalina. Su patineta casi siempre anda con él.',
    quote: 'Ya era hora de que este callejón tuviera algo que perseguir.',
    cabinaLine: 'Para patinar hasta que se acabe la cinta.',
    version: 'Vi las huellas y pensé que por fin tenía una excusa para sacar la tabla. Alcancé a dar un empujón antes de que Enzo me jalara la manga.',
    spotify: 'https://open.spotify.com/playlist/0veQUE1GzL4lnHy7JApBnj',
    accent: '#f9cb6e', art: '/art/morris-completo.webp', mini: '/art/morris-mini.webp', artSize: [760, 940], mural: [34, 42],
  },
  {
    id: 'enzo', name: 'Enzo', role: 'El sobreviviente',
    age: '20 años', color: 'Rosa', height: '1.76 m',
    bio: 'Tímido, observador y el último en sumarse. Escucha a Mac Miller, MF DOOM y Nirvana.',
    quote: 'Espérate. Las huellas van hacia acá.',
    cabinaLine: 'Para cuando ya todos se fueron.',
    version: 'Todos miraban el mural. Yo miré el piso. Las huellas no salían del Callejón. Venían hacia nosotros.',
    spotify: 'https://open.spotify.com/playlist/6b6Lp48wkVnSi101w2Yiey',
    accent: '#ffa6d3', art: '/art/enzo-retrato.webp', mini: '/art/enzo-mini.webp', artSize: [1000, 1333], mural: [79, 41],
  },
];

export const getDuck = (id: string) => crew.find((d) => d.id === id)!;

export const gallery = [
  { id: 'letras-rojas', name: 'Letras rojas' },
  { id: 'muro', name: 'Muro de concreto' },
  { id: 'letras-blancas', name: 'Letras blancas' },
  { id: 'sticker', name: 'Sticker grupal' },
  { id: 'poster', name: 'Póster nocturno' },
];

export const extras = [
  { slug: 'tarjeta', title: 'Haz tu tarjeta', desc: 'Arma una tarjeta y descárgala para Stories' },
  { slug: 'versiones', title: 'El mismo día, cinco versiones', desc: 'El mural misterioso desde cinco puntos de vista' },
  { slug: 'libreta', title: 'La libreta de Duxter', desc: 'Pruebas de lettering y decisiones de diseño' },
  { slug: 'juego', title: '¿De quién es esto?', desc: 'Adivina de qué pato es cada detalle' },
  { slug: 'calle', title: 'Los stickers en la calle', desc: 'Diseños de stickers y espacio para sus fotos' },
];

export const quiz = [
  { q: '¿De quién es la patineta?', a: 'morris', fact: 'Morris mezcla el skate con la estética punk Y2K.', clue: 4 },
  { q: '¿Quién lleva lentes de flama?', a: 'cuakki', fact: 'Cuakki es cantante y propuso el nombre Duck Vandal.', clue: 2 },
  { q: '¿Quién usa pasamontañas negro?', a: 'duxter', fact: 'Duxter es el grafitero y líder de la pandilla.', clue: 1 },
  { q: '¿De quién es el bull terrier?', a: 'aco', fact: 'Aco es peleador de MMA y aparece con su perro en su retrato.', clue: 3 },
  { q: '¿Quién lleva una sudadera azul y tiene el pelo rosa?', a: 'enzo', fact: 'Enzo es observador y fue el último en unirse.', clue: 5 },
];
