import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import StarBackground from "@/components/StarBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden text-white">
      <StarBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
    </main>
  );
}