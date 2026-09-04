import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

interface ProjectPageProps {
  params: { slug: string };
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  const url = `${siteConfig.url}/projects/${project.slug}`;
  const title = `${project.title} — ${project.category}`;

  return {
    title,
    description: project.tagline,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description: project.tagline,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.tagline,
    },
  };
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-mono uppercase tracking-wide text-zinc-600">
      {children}
    </h2>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400 md:text-base">
          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.tagline,
    applicationCategory: project.category,
    url: project.liveUrl ?? project.githubUrl,
    codeRepository: project.githubUrl,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <main className="min-h-screen bg-zinc-950">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver a Proyectos
        </Link>

        {/* Hero */}
        <header className="mt-8">
          <span className="rounded border border-zinc-800 px-2 py-1 font-mono text-xs uppercase tracking-wide text-zinc-500">
            {project.category}
          </span>
          <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-zinc-100 md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-400">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
              >
                Live Demo
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
            >
              <Code2 className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </header>

        {/* The Problem */}
        <section className="mt-14">
          <Label>The Problem</Label>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            {project.problem}
          </p>
        </section>

        {/* The Solution */}
        <section className="mt-10">
          <Label>The Solution</Label>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            {project.solution}
          </p>
        </section>

        {/* Architecture / Engineering */}
        <section className="mt-10">
          <Label>Architecture / Engineering</Label>
          <Bullets items={project.engineering} />
        </section>

        {/* Key Features */}
        <section className="mt-10">
          <Label>Key Features</Label>
          <Bullets items={project.keyFeatures} />
        </section>

        {/* Engineering Challenges */}
        <section className="mt-10">
          <Label>Engineering Challenges</Label>
          <Bullets items={project.challenges} />
        </section>

        {/* Result / Current State */}
        <section className="mt-10">
          <Label>Result / Current State</Label>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            {project.result}
          </p>
          {project.limitation && (
            <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
              <p className="text-[11px] font-mono uppercase tracking-wide text-zinc-600">
                Limitación conocida
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {project.limitation}
              </p>
            </div>
          )}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-4">
              <p className="text-[11px] font-mono uppercase tracking-wide text-zinc-600">
                Resultados
              </p>
              <Bullets items={project.metrics} />
            </div>
          )}
        </section>

        {/* Stack */}
        <section className="mt-10">
          <Label>Stack</Label>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded border border-zinc-800 bg-zinc-900/50 px-2.5 py-1 font-mono text-xs text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="mt-14 flex flex-wrap items-center gap-3 border-t border-zinc-800 pt-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
            >
              Live
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
          >
            GitHub
            <Code2 className="h-3.5 w-3.5" />
          </a>
          <Link
            href="/#proyectos"
            className="ml-auto text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Ver todos los proyectos →
          </Link>
        </section>
      </article>

      <Footer />
    </main>
  );
}
