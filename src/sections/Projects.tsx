import Section from "../components/Section";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projets"
      subtitle={
        <a
          href="https://github.com/sharikamrdh?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white/75 hover:text-white transition underline underline-offset-4"
        >
          Voir tous mes projets sur GitHub
        </a>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={0.04 * i}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

