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
import type { TechCategory, Project } from "./types";

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
// PROYECTOS
// Estructura reutilizable para todos los proyectos, actuales y futuros.
// Rellena/edita cada campo directamente aquí; el componente ProjectCard
// no necesita tocarse al agregar un proyecto nuevo.
//
// - liveUrl: déjalo sin definir (omite la propiedad) mientras el proyecto
//   no esté desplegado. El botón "Live Demo" no se renderiza si falta.
// - metrics: solo agrega números que puedas verificar. Si no hay ninguno
//   real todavía, omite la propiedad — no se renderiza la sección.
// ─────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Site Auditor",
    category: "SEO & Performance Tooling",
    tagline:
      "Analiza la salud SEO y el rendimiento de cualquier URL en segundos.",
    problem:
      "Detectar problemas de SEO técnico y metadatos rotos suele requerir revisar manualmente varias herramientas dispersas, lo que ralentiza las auditorías rápidas.",
    solution:
      "SiteAuditor centraliza el análisis: recibe una URL, evalúa sus etiquetas OpenGraph y tiempos de respuesta HTTP, y genera un reporte ejecutivo visual en una sola pantalla.",
    engineering: [
      "Implementé Server Actions de Next.js para orquestar el scraping y análisis sin exponer un endpoint API público.",
      "Diseñé el parser de etiquetas OpenGraph y metadatos HTML, con manejo de casos incompletos o mal formados.",
      "Construí la visualización de resultados con Recharts, mapeando cada chequeo a un estado (correcto / advertencia / error).",
      "Validé y saneé las URLs de entrada para evitar solicitudes a dominios no seguros.",
    ],
    tech: ["Next.js", "Server Actions", "TypeScript", "Tailwind CSS", "Recharts"],
    // metrics: agrega aquí cuando tengas números reales (ej. "20+ checks técnicos")
    githubUrl: "https://github.com/josehernandezdeves/siteauditor",
    liveUrl: "https://siteauditor-rust.vercel.app/",
  },
  {
    title: "CashFlow Lab",
    category: "Fintech Dashboard",
    tagline:
      "Panel de control para gestionar ingresos, gastos y flujo de caja personal.",
    problem:
      "Las hojas de cálculo genéricas no ofrecen una vista clara ni filtrable del flujo de caja real a lo largo del tiempo.",
    solution:
      "CashFlow Lab centraliza ingresos y gastos en un dashboard con filtros por fecha y categoría, y visualiza el flujo de caja con gráficos interactivos.",
    engineering: [
      "Diseñé el esquema de base de datos en PostgreSQL (Supabase) para transacciones, categorías y usuarios.",
      "Implementé filtros combinables por rango de fechas y categoría personalizada sobre las consultas a la base de datos.",
      "Construí los gráficos interactivos de flujo de caja con Recharts, agregando datos por periodo.",
      "Aseguré el acceso a los datos con Row Level Security de Supabase, aislando la información por usuario.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
    githubUrl: "https://github.com/tuusuario/cashflow-lab",
    // liveUrl: "https://cashflowlab.tudominio.com",
  },
  {
    title: "DocuExtract",
    category: "OCR & Document Automation",
    tagline:
      "Extrae automáticamente los datos fiscales clave de facturas y tickets.",
    problem:
      "La captura manual de datos de facturas para contabilidad es lenta y propensa a errores humanos.",
    solution:
      "DocuExtract permite subir una factura o ticket y usa OCR para extraer los datos fiscales clave, dejándolos listos para generar reportes contables.",
    engineering: [
      "Integré Tesseract.js para el procesamiento OCR en el flujo de subida de documentos.",
      "Implementé la lógica de extracción y normalización de campos fiscales (fecha, total, identificación fiscal, conceptos) a partir del texto OCR.",
      "Diseñé el pipeline de procesamiento en Node.js, separando la extracción de texto de la validación de datos.",
      "Construí el almacenamiento estructurado de los datos extraídos en Supabase para su posterior reporte.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Tesseract.js", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/tuusuario/docuextract",
    // liveUrl: "https://docuextract.tudominio.com",
  },
  {
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
    tech: ["Next.js", "Middleware", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/josehernandezdeves/trimlink",
    liveUrl: "https://trimlink-lilac.vercel.app/",
  },
  {
    title: "LexChain",
    category: "LegalTech & Blockchain",
    tagline:
      "Genera contratos legales dinámicos y valida su huella digital en blockchain.",
    problem:
      "Los freelancers que trabajan con clientes en distintos países necesitan contratos legales adaptados a cada jurisdicción, sin depender de un abogado para cada caso simple.",
    solution:
      "LexChain genera contratos legales dinámicos según la jurisdicción seleccionada, y registra su huella digital en blockchain para dar prueba de integridad.",
    engineering: [
      "Implementé la generación de PDFs dinámicos con pdf-lib a partir de plantillas por jurisdicción.",
      "Integré ethers.js para calcular el hash del contrato y registrarlo en una testnet de Ethereum.",
      "Diseñé el sistema de plantillas de contrato parametrizables por país y tipo de acuerdo.",
      "Validé los datos de entrada del formulario para asegurar que el contrato generado sea consistente.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "pdf-lib", "ethers.js", "Testnet Ethereum"],
    metrics: ["2 jurisdicciones soportadas (España, Venezuela)"],
    githubUrl: "https://github.com/josehernandezdeves/lexchain",
    liveUrl: "https://lexchain-sooty.vercel.app/",
  },
];