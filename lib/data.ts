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

export const projects: Project[] = [
  {
    title: "SiteAuditor",
    description:
      "Auditor de rendimiento web y metadatos SEO. Analiza la salud SEO de cualquier URL, evaluando etiquetas OpenGraph, tiempos de respuesta HTTP y generando un reporte ejecutivo visual.",
    tech: ["Next.js", "Server Actions", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "https://siteauditor-rust.vercel.app/",
    githubUrl: "https://github.com/josehernandezdeves/siteauditor",
  },
  {
    title: "CashFlow Lab",
    description:
      "Panel de finanzas personales tipo dashboard fintech. Gestión de ingresos y gastos con filtros avanzados por fechas, categorías personalizadas y gráficos interactivos de flujo de caja.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
    liveUrl: "https://cashflowlab.example.com",
    githubUrl: "https://github.com/tuusuario/cashflow-lab",
  },
  {
    title: "DocuExtract",
    description:
      "Gestor y analizador inteligente de facturas con OCR. Herramienta B2B donde el usuario sube una factura o ticket y el sistema extrae automáticamente los datos fiscales clave para generar reportes contables.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tesseract.js", "Tailwind CSS", "Supabase"],
    liveUrl: "https://docuextract.example.com",
    githubUrl: "https://github.com/tuusuario/docuextract",
  },
  {
    title: "TrimLink",
    description:
      "Acortador de enlaces con analíticas y geolocalización. Transforma URLs largas en enlaces cortos únicos, registrando de forma anónima métricas de clics, país por IP y tipo de dispositivo.",
    tech: ["Next.js", "Middleware", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://trimlink.example.com",
    githubUrl: "https://github.com/tuusuario/trimlink",
  },
  {
    title: "LexChain",
    description:
      "Generador de contratos legales multi-país con blockchain. Permite a freelancers generar contratos dinámicos seleccionando jurisdicción (España o Venezuela) y validar su huella digital en blockchain.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "pdf-lib", "ethers.js", "Testnet Ethereum"],
    liveUrl: "https://lexchain.example.com",
    githubUrl: "https://github.com/tuusuario/lexchain",
  },
];
