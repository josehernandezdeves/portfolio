import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 text-center md:p-12">
        <h2 className="text-2xl font-medium text-zinc-100 md:text-3xl">
          ¿Construimos algo juntos?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
          Disponible para incorporarme a un equipo. Si buscas un perfil
          full-stack capaz de llevar un producto de la arquitectura al
          despliegue, hablemos.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
          >
            <Mail className="h-3.5 w-3.5" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
          >
            <Linkedin className="h-3.5 w-3.5" />
            LinkedIn
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
