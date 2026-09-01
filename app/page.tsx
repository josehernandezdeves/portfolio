import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
