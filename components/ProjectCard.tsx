import { ExternalLink, Code2 } from "lucide-react";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <h3 className="text-lg font-medium text-zinc-100 md:text-xl">
          {project.title}
        </h3>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
          >
            Live Demo
            <ExternalLink className="h-3 w-3" />
          </a>
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

      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1 font-mono text-xs text-zinc-500"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
