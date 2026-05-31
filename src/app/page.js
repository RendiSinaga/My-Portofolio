import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import StarBackground from "@/components/StarBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden text-white">
      <StarBackground />

      <Navbar />

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}