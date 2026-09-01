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
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}
