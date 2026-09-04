import Link from "next/link";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-[11px] font-mono uppercase tracking-wide text-zinc-600">
      {children}
    </h4>
  );
}

function BulletList({ items, dotClassName }: { items: string[]; dotClassName: string }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
          <span className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${dotClassName}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 md:p-8">
      {/* Encabezado */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-lg font-medium text-zinc-100 md:text-xl">
              <Link
                href={`/projects/${project.slug}`}
                className="transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:underline"
              >
                {project.title}
              </Link>
            </h3>
            <span className="rounded border border-zinc-800 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-zinc-500">
              {project.category}
            </span>
          </div>
          <p className="mt-1.5 max-w-xl text-sm text-zinc-400">{project.tagline}</p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
            >
              Live Demo
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
          >
            GitHub
            <Code2 className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Problema / Solución */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <SectionLabel>Problema</SectionLabel>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{project.problem}</p>
        </div>
        <div>
          <SectionLabel>Solución</SectionLabel>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{project.solution}</p>
        </div>
      </div>

      {/* Engineering */}
      <div className="mt-6">
        <SectionLabel>Engineering</SectionLabel>
        <BulletList items={project.engineering} dotClassName="bg-zinc-600" />
      </div>

      {/* Tech stack */}
      <div className="mt-6">
        <SectionLabel>Tech Stack</SectionLabel>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1 font-mono text-xs text-zinc-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Resultados / métricas — solo si existen */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-6">
          <SectionLabel>Resultados</SectionLabel>
          <BulletList items={project.metrics} dotClassName="bg-emerald-500" />
        </div>
      )}

      {/* Case study */}
      <div className="mt-6 border-t border-zinc-800 pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors hover:text-zinc-100"
        >
          Ver case study completo
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
