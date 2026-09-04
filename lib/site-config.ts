/**
 * Configuración central del sitio, usada por metadata, sitemap, robots y
 * los JSON-LD de la home y de los case studies.
 *
 * IMPORTANTE: `url` asume un dominio placeholder porque el dominio de
 * producción real no estaba disponible en el momento de esta implementación.
 * Define la variable de entorno NEXT_PUBLIC_SITE_URL en producción (Vercel →
 * Project Settings → Environment Variables) con el dominio real para que
 * canonical, Open Graph, sitemap.xml y el structured data apunten al lugar
 * correcto.
 */
export const siteConfig = {
  name: "José Hernández",
  title: "José Hernández — Full-Stack Product Engineer",
  description:
    "Portfolio de José Hernández, Full-Stack Product Engineer. Construyo productos completos de extremo a extremo — arquitectura, backend, frontend y despliegue — con Next.js, TypeScript y PostgreSQL.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-josehernandezdeves.vercel.app/",
  github: "https://github.com/josehernandezdeves",
  linkedin: "https://www.linkedin.com/in/josehernandezdeves/",
  email: "josehernandezdeves@gmail.com",
  locale: "es_ES",
};
