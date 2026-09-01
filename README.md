# Dev
Baltazar Llique Franklin Anderson

# Nutriforce Landing Page
Landing page responsive desarrollada para presentar la marca Nutriforce / ENERCORN mediante una experiencia web moderna, visual e interactiva.

El proyecto está enfocado en frontend. Incluye navegación por secciones, presentación de productos, carrusel de variedades, información de ingredientes y enlaces de contacto. No contiene backend ni base de datos.

## Tecnologías

- React 19
- Vite 8
- Tailwind CSS 4
- JavaScript moderno con módulos ES
- ESLint 10
- HTML5 y CSS3

## Características técnicas

- Diseño responsive.
- Componentes organizados por responsabilidad.
- Carrusel interactivo implementado con `useState` de React.
- Animaciones CSS para la imagen principal y transición de tarjetas.
- Datos de productos, ingredientes y redes sociales separados de la vista.
- Validación de código con ESLint.

## SEO y visibilidad digital implementados
Se incorporaron prácticas de optimización para posicionamiento y redes sociales con el objetivo de mejorar la presencia del sitio en buscadores y contenido compartido.

- Meta title y meta description en español para posicionamiento en buscadores.
- Keywords relevantes para Nutriforce, Enercorn y el mercado peruano.
- Open Graph configurado para compartir la landing page en redes sociales.
- Twitter Cards configuradas con vista previa de imagen y contenido promocional.
- Imagen de previsualización recomendada para redes.
- Archivos `robots.txt` y `sitemap.xml` creados para indexación de buscadores.
- Script de Google Tag Manager agregado para análisis y seguimiento.
- Pixel de TikTok incorporado para medición de eventos y campañas.

## Estructura del proyecto

```text
src/
├── App.jsx
├── main.jsx
├── index.css
├── assets/
│   ├── cacao.webp
│   ├── cafe.webp
│   ├── coco.webp
│   ├── maiz.webp
│   ├── platano.webp
│   ├── qr.webp
├── data/
│   └── nutriforceContent.js
└── components/
    ├── LandingMain.jsx
    ├── NutriforceLanding.jsx
    ├── layout/
    │   ├── Header.jsx
    │   └── Footer.jsx
    ├── sections/
    │   ├── HeroSection.jsx
    │   ├── IngredientStripSection.jsx
    │   ├── ProductCarouselSection.jsx
    │   ├── WhyStripSection.jsx
    │   └── IngredientsSection.jsx
    └── ui/
        ├── IngredientMeterCard.jsx
        ├── ProductCard.jsx
        ├── QRPlaceholder.jsx
        ├── SectionBadge.jsx
        └── SocialLink.jsx
```

### Organización de componentes

- `layout/`: componentes estructurales globales como encabezado y pie de página.
- `sections/`: bloques principales que forman el contenido de la landing page.
- `ui/`: componentes pequeños y reutilizables, como tarjetas, indicadores y enlaces sociales.
- `data/`: contenido estático y configuración visual de productos, ingredientes y redes sociales.
- `assets/`: imágenes locales utilizadas por la interfaz.

## Requisitos

- Node.js 18 o superior.
- npm 9 o superior.

## Alcance actual

Este repositorio contiene únicamente la interfaz frontend. Los enlaces de contacto dirigen a servicios externos y el código QR utiliza un recurso gráfico local. No se implementan autenticación, gestión de usuarios, pagos, inventario ni persistencia de datos.