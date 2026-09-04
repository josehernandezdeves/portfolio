import type { LucideIcon } from "lucide-react";

export interface TechItem {
  name: string;
  icon: LucideIcon;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface Project {
  /** Identificador de URL, ej. "docuextract" → /projects/docuextract */
  slug: string;
  title: string;
  /** Etiqueta corta, ej. "Fintech Dashboard", "LegalTech & Blockchain" */
  category: string;
  /** Una frase: qué es el producto y qué valor aporta */
  tagline: string;
  /** 1-2 frases: el problema real que resuelve */
  problem: string;
  /** 1-2 frases: qué hace concretamente y cómo resuelve el problema */
  solution: string;
  /** 3-5 bullets técnicos concretos que construiste tú (usados en la card y el case study) */
  engineering: string[];
  /** 3-6 funcionalidades clave del producto, para la sección "Key Features" del case study */
  keyFeatures: string[];
  /** Partes técnicamente difíciles o interesantes de construir */
  challenges: string[];
  /** Estado actual: qué funciona, si está desplegado */
  result: string;
  /** Limitación técnica conocida y documentada. Omitir si no aplica — nunca inventar una. */
  limitation?: string;
  tech: string[];
  /** Métricas reales y verificables. Omitir el array (o dejarlo vacío)
   *  si no hay ninguna métrica real todavía — nunca inventar una. */
  metrics?: string[];
  /** Solo se muestra el botón "Live Demo" si existe */
  liveUrl?: string;
  githubUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  /** 1-2 frases de encuadre general del puesto */
  summary: string;
  /** Responsabilidades/logros, en orden de prioridad (producto > deploy > APIs > SEO > infraestructura) */
  highlights: string[];
  tech: string[];
}
