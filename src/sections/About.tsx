import Section from "../components/Section";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <Section
      id="about"
      title="À propos"
      subtitle="Étudiante en L3 MIAGE, passionnée par le développement et la data, avec une approche rigoureuse et concrète."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            t: "Qui suis-je ?",
            d: "Étudiante en L3 MIAGE, je me forme au développement informatique avec une double compétence en systèmes d’information, data et gestion."
          },
          {
            t: "Ce que j’aime faire",
            d: "Développer des applications web claires et utiles, travailler sur des projets concrets et comprendre comment les données peuvent améliorer les décisions."
          },
          {
            t: "Mon objectif",
            d: "Trouver un stage en informatique (data / développement) à partir d’avril 2026, au sein d’une équipe où je peux apprendre et contribuer."
          },
        ].map((c, i) => (
          <Reveal key={c.t} delay={0.05 * i}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-glow">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {c.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

