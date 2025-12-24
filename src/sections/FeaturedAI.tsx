import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { featuredAI } from "../data/content";

export default function FeaturedAI() {
  return (
    <Section id="ai" title="Projet phare IA" subtitle="Un cas concret : générer des quiz utiles">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8 backdrop-blur-xl shadow-glow">
          <h3 className="text-xl font-semibold tracking-tight">{featuredAI.title}</h3>
          <p className="mt-3 text-white/70 max-w-3xl">{featuredAI.pitch}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredAI.bullets.map((b) => (
              <div key={b} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-white/75">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              Discuter du projet
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
            >
              Voir les autres projets
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
