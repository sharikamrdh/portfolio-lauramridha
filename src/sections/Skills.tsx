import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Compétences" subtitle="Stack moderne + bases solides en SI / data.">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={0.05 * i}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-glow">
              <h3 className="font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
