import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-zinc-300">José Hernández</p>
          <p className="mt-1 text-xs text-zinc-600">
            © {year}. Construido con Next.js y Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/josehernandezdeves"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/josehernandezdeves/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:josehernandezdeves@gmail.com"
            aria-label="Email"
            className="rounded-md p-2 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
