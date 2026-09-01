import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="tech-stack" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="text-2xl font-medium text-zinc-100 md:text-3xl">
        Tech Stack
      </h2>
      <p className="mt-2 max-w-lg text-sm text-zinc-500">
        Herramientas y tecnologías que uso a diario para construir productos
        de principio a fin.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5"
          >
            <h3 className="mb-4 text-xs font-medium text-zinc-500">
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <Icon className="h-4 w-4 text-zinc-500" strokeWidth={1.75} />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
