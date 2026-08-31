import cacaoImage from '../assets/cacao.webp'
import cafeImage from '../assets/cafe.webp'
import cocoImage from '../assets/coco.webp'
import maizImage from '../assets/maiz.webp'
import platanoImage from '../assets/platano.webp'
import qrImage from '../assets/qr.webp'

export const productImageAlt = 'ENERCORN Coco y Miel — empaque plateado 25g'
export const heroImage = maizImage
export const ingredientsImage = cocoImage
export const qrAsset = qrImage

export const heroStats = [
  { value: '5', label: 'Sabores' },
  { value: '25g', label: 'Peso Neto' },
  { value: '100%', label: 'Natural' },
]

export const heroTags = ['✅ Sin Conservantes', '⚡ Energía Instantánea', '🌿 Receta Mejorada', '💪 Alto en Proteínas']

export const ingredientStripItems = [
  { icon: '🥜', label: 'Maní' },
  { icon: '🍯', label: 'Miel Natural' },
  { icon: '🌾', label: 'Avena Integral' },
  { icon: '🌿', label: 'Sacha Inchi' },
  { icon: '🫘', label: 'Almendras' },
  { icon: '🌽', label: 'Maíz Seleccionado' },
]

export const products = [
  {
    id: 1,
    name: 'ENERCORN Maíz Original',
    subtitle: 'Receta Clásica de Maíz',
    description:
      'La receta clásica con maíz crujiente seleccionado, avena integral y miel pura. El sabor auténtico que te da energía todo el día.',
    icon: '🌽',
    image: maizImage,
    hue: '0deg',
    saturate: '1.1',
    badge: 'Clásico',
    accent: '#F9A825',
    ingredients: ['Maíz', 'Miel', 'Avena'],
  },
  {
    id: 2,
    name: 'ENERCORN Cacao',
    subtitle: 'Chocolate Oscuro Intenso',
    description:
      'Maíz base con cacao oscuro premium y maní tostado. Energía intensa con el placer del chocolate real.',
    icon: '🍫',
    image: cacaoImage,
    hue: '200deg',
    saturate: '0.5',
    badge: 'Favorito',
    accent: '#6D4C41',
    ingredients: ['Cacao', 'Maní', 'Maíz'],
  },
  {
    id: 3,
    name: 'ENERCORN Coco y Miel',
    subtitle: 'Coco Natural y Miel Pura',
    description:
      'Coco rallado natural con miel de abeja pura y frutos secos. Dulzura tropical con energía sostenida.',
    icon: '🥥',
    image: cocoImage,
    hue: '0deg',
    saturate: '1',
    badge: 'Estrella',
    accent: '#7CB342',
    ingredients: ['Coco', 'Miel', 'Frutos Secos'],
    isHero: true,
  },
  {
    id: 4,
    name: 'ENERCORN Plátano',
    subtitle: 'Energía Natural de Plátano',
    description:
      'Plátano deshidratado natural con avena y sacha inchi. Un impulso de potasio y energía pura.',
    icon: '🍌',
    image: platanoImage,
    hue: '40deg',
    saturate: '1.4',
    badge: 'Potencia',
    accent: '#F57F17',
    ingredients: ['Plátano', 'Sacha Inchi', 'Avena'],
  },
  {
    id: 5,
    name: 'ENERCORN Café',
    subtitle: 'Café Tostado y Granos',
    description:
      'Granos de café tostado con maíz crujiente y miel natural. Energía y foco para tu jornada más exigente.',
    icon: '☕',
    image: cafeImage,
    hue: '320deg',
    saturate: '0.7',
    badge: 'Enfoque',
    accent: '#BF360C',
    ingredients: ['Café', 'Almendras', 'Maíz'],
  },
]

export const whyCards = [
  { icon: '🚫', title: 'Sin Conservantes', desc: 'Ingredientes 100% naturales, sin aditivos ni preservantes artificiales.' },
  { icon: '⚡', title: 'Energía Real', desc: 'Carbohidratos complejos de liberación sostenida para todo el día.' },
  { icon: '🌿', title: 'Sacha Inchi', desc: 'Superalimento amazónico rico en Omega-3, 6 y 9 y proteína completa.' },
  { icon: '💊', title: 'Vitaminas', desc: 'Fortificado con vitaminas esenciales y alto en fibras y proteínas.' },
]

export const ingredientMeters = [
  { icon: '🥜', name: 'Maní', desc: 'Proteína vegetal, grasas saludables y vitamina E para resistencia muscular.', pct: 85, color: '#8D6E63' },
  { icon: '🍯', name: 'Miel Natural', desc: 'Endulzante natural con propiedades antimicrobianas y energía rápida.', pct: 90, color: '#F9A825' },
  { icon: '🌾', name: 'Avena Integral', desc: 'Fibra soluble beta-glucano para energía de liberación lenta.', pct: 88, color: '#7CB342' },
  { icon: '🌿', name: 'Sacha Inchi', desc: 'Superalimento amazónico, fuente de Omega-3, 6 y 9 y proteína completa.', pct: 78, color: '#558B2F' },
  { icon: '🫘', name: 'Almendras', desc: 'Magnesio, calcio y antioxidantes para proteger el corazón.', pct: 82, color: '#6D4C41' },
]

export const socials = [
  {
    name: 'WhatsApp',
    handle: '+51 988 645 827',
    color: '#25D366',
    href: 'https://wa.me/51988645827',
  },
  {
    name: 'Facebook',
    handle: 'Enercorn',
    color: '#1877F2',
    href: 'https://www.facebook.com/profile.php?id=61593803975959&mibextid=rS40aB7S9Ucbxw6v',
  },
  {
    name: 'TikTok',
    handle: '@Enercorn',
    color: '#010101',
    href: 'https://www.tiktok.com/@enercornnutriforc?_r=1&_t=ZS-99KO0XNTMoi',
  },
  {
    name: 'Correo',
    handle: 'generalbaltazarbaltazar@gmail.com',
    color: '#EA4335',
    href: 'mailto:generalbaltazarbaltazar@gmail.com',
  },
]