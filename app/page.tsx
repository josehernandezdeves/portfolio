import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Full-Stack Product Engineer",
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    sameAs: [siteConfig.github, siteConfig.linkedin],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <main className="min-h-screen bg-zinc-950">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
