import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="text-2xl font-medium text-zinc-100 md:text-3xl">
        Proyectos Destacados
      </h2>
      <p className="mt-2 max-w-lg text-sm text-zinc-500">
        Cinco productos construidos de extremo a extremo, del diseño a la
        base de datos.
      </p>

      <div className="mt-10 flex flex-col gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
