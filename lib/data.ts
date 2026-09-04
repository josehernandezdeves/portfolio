import {
  Triangle,
  Atom,
  FileCode2,
  Wind,
  Server,
  Database,
  Flame,
  GitBranch,
  Container,
  Cloud,
} from "lucide-react";
import type { TechCategory, Project, Experience } from "./types";

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: Triangle },
      { name: "React", icon: Atom },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    category: "Backend & Base de Datos",
    items: [
      { name: "Node.js", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "Supabase", icon: Flame },
    ],
  },
  {
    category: "Herramientas & Cloud",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "Vercel", icon: Cloud },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// EXPERIENCIA PROFESIONAL
// A diferencia de `projects`, esto es trabajo real realizado para una
// empresa, no un producto propio. Se muestra en su propia sección
// (Experience), separada visual y conceptualmente de Projects.
// ─────────────────────────────────────────────────────────────

export const experience: Experience = {
  role: "Full-Stack Developer / Product Engineer",
  company: "RE/MAX Arena",
  period: "2025 — 2026",
  summary:
    "Desarrollé y mantuve soluciones digitales para una empresa inmobiliaria real, cubriendo tanto el producto de cara al cliente como las herramientas internas del equipo.",
  highlights: [
    "Desarrollé y mantuve el sitio web corporativo, liderando después una nueva versión completa con rebranding.",
    "Construí dashboards internos y herramientas CRUD a medida para digitalizar procesos del equipo.",
    "Implementé generación de PDFs y flujos de exportación para reportes internos.",
    "Integré APIs de inteligencia artificial y de geolocalización en las herramientas internas.",
    "Desplegué y mantuve las aplicaciones en producción, incluyendo la administración del servidor.",
    "Contribuí a la estrategia de SEO local y reputación digital, ayudando a consolidar una presencia de 100+ reseñas positivas en Google.",
    "Migré y administré la red LAN de la oficina; el soporte técnico de los equipos fue una responsabilidad complementaria dentro de infraestructura.",
  ],
  tech: ["PHP", "JavaScript", "SQL", "APIs REST", "Linux / Servidores", "Networking", "SEO técnico"],
};

// ─────────────────────────────────────────────────────────────
// PROYECTOS
// Estructura reutilizable para todos los proyectos, actuales y futuros.
// Rellena/edita cada campo directamente aquí; el componente ProjectCard
// y las páginas /projects/[slug] no necesitan tocarse al agregar un
// proyecto nuevo.
//
// - liveUrl: déjalo sin definir (omite la propiedad) mientras el proyecto
//   no esté desplegado. El botón "Live Demo" no se renderiza si falta.
// - metrics: solo agrega números que puedas verificar. Si no hay ninguno
//   real todavía, omite la propiedad — no se renderiza la sección.
// - limitation: solo si existe una limitación técnica real y documentada.
// ─────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "site-auditor",
    title: "Site Auditor",
    category: "SEO & Performance Tooling",
    tagline:
      "Analiza la salud SEO y el rendimiento de cualquier URL en segundos.",
    problem:
      "Detectar problemas de SEO técnico y metadatos rotos suele requerir revisar manualmente varias herramientas dispersas, lo que ralentiza las auditorías rápidas.",
    solution:
      "Site Auditor centraliza el análisis: recibe una URL, evalúa sus etiquetas OpenGraph y tiempos de respuesta HTTP, y genera un reporte ejecutivo visual en una sola pantalla.",
    engineering: [
      "Implementé Server Actions de Next.js para orquestar el scraping y análisis sin exponer un endpoint API público.",
      "Diseñé el parser de etiquetas OpenGraph y metadatos HTML, con manejo de casos incompletos o mal formados.",
      "Construí la visualización de resultados con Recharts, mapeando cada chequeo a un estado (correcto / advertencia / error).",
      "Validé y saneé las URLs de entrada para evitar solicitudes a dominios no seguros.",
    ],
    keyFeatures: [
      "Análisis de una URL bajo demanda, sin registro ni configuración previa.",
      "Parsing de etiquetas OpenGraph y metadatos HTML clave.",
      "Reporte visual con estado por chequeo (correcto / advertencia / error).",
      "Visualización de resultados con Recharts.",
      "Validación y saneado de las URLs de entrada.",
    ],
    challenges: [
      "Parsear HTML real e incompleto en la web (etiquetas OpenGraph ausentes o mal formadas) sin que el análisis falle.",
      "Orquestar el scraping y análisis desde Server Actions en vez de un endpoint API público, para no exponer una superficie de ataque innecesaria.",
      "Evitar que la herramienta pudiera usarse para solicitar direcciones o dominios no seguros.",
    ],
    result:
      "Desplegado en Vercel. Analiza cualquier URL en tiempo real y devuelve el reporte visual en la misma pantalla, sin backend expuesto públicamente.",
    tech: ["Next.js", "Server Actions", "TypeScript", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com/josehernandezdeves/siteauditor",
    liveUrl: "https://siteauditor-rust.vercel.app/",
  },
  {
    slug: "cashflow-lab",
    title: "CashFlow Lab",
    category: "Fintech Dashboard",
    tagline:
      "Panel de control para gestionar ingresos, gastos y flujo de caja personal.",
    problem:
      "Las hojas de cálculo genéricas no ofrecen una vista clara ni filtrable del flujo de caja real a lo largo del tiempo.",
    solution:
      "CashFlow Lab centraliza ingresos y gastos en un dashboard con filtros por fecha y categoría, y visualiza el flujo de caja con gráficos interactivos respaldados por un modelo de datos real, no una hoja de cálculo.",
    engineering: [
      "Diseñé el esquema de base de datos en PostgreSQL (Supabase) para transacciones, categorías y usuarios.",
      "Implementé filtros combinables por rango de fechas y categoría personalizada sobre las consultas a la base de datos.",
      "Construí los gráficos interactivos de flujo de caja con Recharts, agregando datos por periodo.",
      "Aseguré el acceso a los datos con Row Level Security de Supabase, aislando la información por usuario.",
    ],
    keyFeatures: [
      "Dashboard financiero con visualización interactiva del flujo de caja.",
      "Filtros combinables por rango de fechas y categoría.",
      "Modelado de transacciones y categorías en PostgreSQL.",
      "Aislamiento de datos por usuario mediante Row Level Security.",
    ],
    challenges: [
      "Diseñar un esquema de datos que soportara filtros combinables (fecha + categoría) sin multiplicar las consultas.",
      "Aplicar Row Level Security de Supabase como capa de autorización, en vez de reimplementar esa lógica manualmente en cada ruta.",
    ],
    result:
      "Funcional con datos de prueba end-to-end: alta de transacciones, filtrado y visualización del flujo de caja. El modelo de datos y las políticas de RLS están pensados para escalar a múltiples usuarios reales.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
    githubUrl: "https://github.com/tuusuario/cashflow-lab",
  },
  {
    slug: "docuextract",
    title: "DocuExtract",
    category: "OCR & Document Automation",
    tagline:
      "Extrae automáticamente los datos fiscales clave de facturas y tickets.",
    problem:
      "La captura manual de datos de facturas para contabilidad es lenta y propensa a errores humanos, y las empresas necesitan un flujo confiable incluso cuando el OCR no está seguro del resultado.",
    solution:
      "DocuExtract permite subir una factura o ticket y usa OCR para extraer los datos fiscales clave, dejándolos listos para contabilidad. Cuando la confianza del reconocimiento es baja, el documento pasa a un flujo de revisión humana en vez de guardar datos poco fiables.",
    engineering: [
      "Diseñé el pipeline de procesamiento (subida → OCR/extracción → parsing → persistencia) separando el procesamiento server-side de la UI.",
      "Integré Tesseract.js (español + inglés) para OCR sobre imágenes, y extracción de la capa de texto nativa de PDFs con pdf-parse.",
      "Construí un sistema de confianza combinando fiabilidad del OCR y campos fiscales detectados, que deriva automáticamente a revisión humana por debajo de un umbral configurable.",
      "Implementé regex especializadas para identificar NIT/RIF/CUIT/RFC/RUC, fechas (numéricas y en texto) y montos según palabras clave contables.",
      "Aislé los datos por empresa con Row Level Security de Supabase y serví los documentos originales mediante URLs firmadas de corta duración desde un bucket de Storage privado.",
      "Mantuve la `service_role key` de Supabase exclusivamente en Route Handlers de servidor, sin exponerla nunca al navegador.",
    ],
    keyFeatures: [
      "Subida de facturas/tickets con validación de tipo y tamaño de archivo.",
      "OCR sobre imágenes (Tesseract.js) y extracción de texto nativo en PDFs.",
      "Extracción y normalización de campos fiscales: identificación fiscal, fechas, montos e ítems.",
      "Scoring de confianza con derivación automática a revisión humana.",
      "Revisión y validación manual del documento antes de marcarlo como completado.",
      "Exportación de facturas a CSV.",
    ],
    challenges: [
      "Separar el procesamiento server-side (OCR, parsing, acceso a Storage) de la UI, para que la `service_role key` nunca llegue al cliente.",
      "Diseñar el cálculo de confianza combinando la fiabilidad del OCR con la cantidad de campos clave detectados, en vez de un umbral arbitrario único.",
      "Aislar los datos por empresa con RLS para que ningún usuario pueda leer o escribir facturas de otra empresa aunque conozca su ID.",
    ],
    result:
      "Desplegado en Vercel. El flujo completo —subida, OCR/parsing, persistencia y revisión humana— funciona de extremo a extremo sobre imágenes y PDFs con capa de texto nativa.",
    limitation:
      "Los PDFs escaneados sin capa de texto nativa no se rasterizan a imagen para aplicarles OCR, ya que esa conversión suele requerir dependencias nativas (poppler-utils) que complican el despliegue serverless. Estos documentos se marcan automáticamente como pendientes de revisión manual; añadir un worker dedicado para rasterizarlos es la mejora documentada para una siguiente iteración.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tesseract.js", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/josehernandezdeves/docuextract",
    liveUrl: "https://docuextract-gamma.vercel.app/",
  },
  {
    slug: "trimlink",
    title: "TrimLink",
    category: "URL Shortener & Analytics",
    tagline: "Acorta enlaces y registra métricas de clics, país y dispositivo.",
    problem:
      "Los enlaces largos son difíciles de compartir y no ofrecen visibilidad sobre quién interactúa con ellos.",
    solution:
      "TrimLink transforma URLs largas en enlaces cortos únicos y registra de forma anónima clics, país (por IP) y tipo de dispositivo.",
    engineering: [
      "Implementé el redireccionamiento de enlaces cortos usando Middleware de Next.js a nivel de edge.",
      "Diseñé el esquema de analíticas en Supabase para registrar clics sin almacenar datos personales identificables.",
      "Construí la resolución de país por IP y detección de tipo de dispositivo a partir del user-agent.",
      "Generé identificadores cortos únicos con verificación de colisiones.",
    ],
    keyFeatures: [
      "Redirección de enlaces cortos vía Middleware a nivel de edge.",
      "Generación de IDs cortos únicos con verificación de colisiones.",
      "Registro de clics, país (por IP) y tipo de dispositivo.",
      "Analíticas agregadas sin almacenar datos personales identificables.",
    ],
    challenges: [
      "Resolver la redirección en el edge (Middleware) sin penalizar la latencia del enlace corto.",
      "Diseñar el esquema de analíticas para capturar señales útiles (país, dispositivo) sin guardar PII.",
    ],
    result:
      "Desplegado. Acorta enlaces y expone sus métricas de uso (clics, país, dispositivo) en tiempo real.",
    tech: ["Next.js", "Middleware", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/josehernandezdeves/trimlink",
    liveUrl: "https://trimlink-lilac.vercel.app/",
  },
  {
    slug: "lexchain",
    title: "LexChain",
    category: "LegalTech & Blockchain",
    tagline:
      "Genera contratos legales dinámicos y verifica su integridad mediante una huella en blockchain.",
    problem:
      "Los freelancers que trabajan con clientes en distintos países necesitan contratos adaptados a cada jurisdicción sin depender de un abogado para cada caso simple, y necesitan poder demostrar que el documento firmado no fue alterado después.",
    solution:
      "LexChain genera contratos dinámicos según la jurisdicción seleccionada y calcula una huella digital del documento que registra en una testnet de Ethereum, permitiendo verificar en cualquier momento que el contrato no ha sido modificado.",
    engineering: [
      "Implementé la generación de PDFs dinámicos con pdf-lib a partir de plantillas por jurisdicción.",
      "Integré ethers.js para calcular el hash del contrato y registrarlo en una testnet de Ethereum.",
      "Diseñé el sistema de plantillas de contrato parametrizables por país y tipo de acuerdo.",
      "Validé los datos de entrada del formulario para asegurar que el contrato generado sea consistente.",
    ],
    keyFeatures: [
      "Generación dinámica de contratos por jurisdicción.",
      "Generación de PDF a partir de plantillas parametrizables (pdf-lib).",
      "Cálculo de huella (hash) del contrato y registro en una testnet de Ethereum.",
      "Verificación de integridad del documento contra su huella en blockchain.",
      "Validación de los datos de entrada del formulario.",
    ],
    challenges: [
      "Diseñar plantillas de contrato parametrizables por país y tipo de acuerdo sin duplicar lógica entre jurisdicciones.",
      "Explicar y resolver el problema real detrás del uso de blockchain: no es una moda, es una forma verificable de probar que un documento no fue alterado.",
    ],
    result:
      "Desplegado. Soporta 2 jurisdicciones (España, Venezuela) y genera contratos con una huella verificable en una testnet de Ethereum.",
    metrics: ["2 jurisdicciones soportadas (España, Venezuela)"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "pdf-lib", "ethers.js", "Testnet Ethereum"],
    githubUrl: "https://github.com/josehernandezdeves/lexchain",
    liveUrl: "https://lexchain-sooty.vercel.app/",
  },
];
