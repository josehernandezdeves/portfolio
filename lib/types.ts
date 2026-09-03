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
  title: string;
  /** Etiqueta corta, ej. "Fintech Dashboard", "LegalTech & Blockchain" */
  category: string;
  /** Una frase: qué es el producto y qué valor aporta */
  tagline: string;
  /** 1-2 frases: el problema real que resuelve */
  problem: string;
  /** 1-2 frases: qué hace concretamente y cómo resuelve el problema */
  solution: string;
  /** 3-5 bullets técnicos concretos que construiste tú */
  engineering: string[];
  tech: string[];
  /** Métricas reales y verificables. Omitir el array (o dejarlo vacío)
   *  si no hay ninguna métrica real todavía — nunca inventar una. */
  metrics?: string[];
  /** Solo se muestra el botón "Live Demo" si existe */
  liveUrl?: string;
  githubUrl: string;
}