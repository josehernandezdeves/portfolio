# Portfolio — José Antonio Hernández Alfonzo

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Antes de publicar, reemplaza:

- `mailto:hola@josehernandez.dev` en `components/Navbar.tsx` y `components/Footer.tsx` → tu correo real.
- `https://github.com/tuusuario` → tu perfil de GitHub.
- `https://linkedin.com/in/tuusuario` → tu perfil de LinkedIn.
- Los `liveUrl` y `githubUrl` de cada proyecto en `lib/data.ts` → los enlaces reales de tus repos y demos.

## Estructura

```
app/
  layout.tsx      → fuentes (Inter + JetBrains Mono), metadata, dark mode
  page.tsx         → ensambla todas las secciones
  globals.css       → estilos base, scroll suave, accesibilidad
components/
  Navbar.tsx        → cabecera con estado "disponible" y accesos rápidos
  Hero.tsx           → sección de impacto inicial
  TechStack.tsx     → grid de tecnologías por categoría
  Projects.tsx       → lista de los 5 proyectos
  ProjectCard.tsx    → tarjeta individual de proyecto
  About.tsx          → sección "Sobre mí"
  Footer.tsx          → enlaces y copyright
lib/
  types.ts           → interfaces TypeScript
  data.ts             → contenido de tech stack y proyectos
```

Todo el contenido (tech stack y proyectos) vive en `lib/data.ts`, así que puedes
editar textos y enlaces sin tocar los componentes.
