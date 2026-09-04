import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="text-2xl font-medium text-zinc-100 md:text-3xl">
        Experiencia Profesional
      </h2>
      <p className="mt-2 max-w-lg text-sm text-zinc-500">
        Esto es lo que ya hice profesionalmente para una empresa real, no un
        proyecto propio.
      </p>

      <article className="mt-10 rounded-lg border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-900/30 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-3.5">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950">
              <Briefcase className="h-4 w-4 text-zinc-400" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-lg font-medium text-zinc-100 md:text-xl">
                {experience.role}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{experience.company}</p>
            </div>
          </div>
          <span className="shrink-0 rounded border border-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-500">
            {experience.period}
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
          {experience.summary}
        </p>

        <div className="mt-6">
          <h4 className="text-[11px] font-mono uppercase tracking-wide text-zinc-600">
            Responsabilidades
          </h4>
          <ul className="mt-2 space-y-1.5">
            {experience.highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-[11px] font-mono uppercase tracking-wide text-zinc-600">
            Stack
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {experience.tech.map((tech) => (
              <span
                key={tech}
                className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1 font-mono text-xs text-zinc-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
