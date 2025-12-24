import GalaxyCanvas from "./components/GalaxyCanvas";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import FeaturedAI from "./sections/FeaturedAI";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background WebGL */}
      <GalaxyCanvas />

      {/* UI Overlay */}
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <FeaturedAI />
          <Contact />
          <footer className="py-10 text-sm text-white/50">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} Laura Mridha</span>
              <span className="text-white/40">Built with React + R3F + Tailwind</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
