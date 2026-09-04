import { ArrowDown, Github } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <span className="mb-6 font-mono text-sm text-zinc-500">
        Full-Stack Product Engineer
      </span>

    <h1 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight text-zinc-100 md:text-6xl">
      José Hernández
    </h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-400 md:text-xl">
        Construyo software que resuelve problemas reales, desde la
        arquitectura hasta el último píxel.
      </p>

      <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-500">
        Soy programador autodidacta con un enfoque riguroso en la
        arquitectura de software y el código limpio. Trabajo con el stack
        moderno de desarrollo web para entregar productos funcionales con
        agilidad, desde el primer commit hasta el despliegue en producción.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#proyectos"
          className="flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
        >
          Explorar Proyectos
          <ArrowDown className="h-3.5 w-3.5" />
        </a>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
        >
          <Github className="h-3.5 w-3.5" />
          Ver GitHub
        </a>
      </div>
    </section>
  );
}
