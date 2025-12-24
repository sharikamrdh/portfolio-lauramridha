import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({
  name,
  desc,
  tags,
  link,
}: {
  name: string;
  desc: string;
  tags: string[];
  link?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // On commence l'effet un peu plus tôt pour plus de fluidité
    offset: ["start 95%", "end 50%"],
  });

  // 1. On crée les valeurs brutes
  const rawOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const rawY = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);

  // 2. On applique l'effet "Spring" d'Apple pour lisser le tout
  // stiffness: contrôle la force du ressort, damping: contrôle l'amorti
  const springConfig = { stiffness: 60, damping: 20, restDelta: 0.001 };
  
  const opacity = useSpring(rawOpacity, springConfig);
  const y = useSpring(rawY, springConfig);
  const scale = useSpring(rawScale, springConfig);

  return (
    <motion.a
      ref={ref}
      style={{
        opacity,
        y,
        scale,
      }}
      // Le hover doit rester très réactif par rapport au scroll
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 } 
      }}
      href={link || "#"}
      target={link ? "_blank" : undefined}
      rel={link ? "noreferrer" : undefined}
      className="group block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-glow hover:bg-white/8 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold tracking-tight text-lg">{name}</h3>
        <div className="rounded-full bg-white/5 p-2 group-hover:bg-white/10 transition-colors">
          <span className="text-xs text-white/45 group-hover:text-white/90 transition-transform duration-300 group-hover:rotate-45 block">
            ↗
          </span>
        </div>
      </div>
      
      <p className="mt-2 text-sm text-white/60 leading-relaxed">
        {desc}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/50 group-hover:border-white/20 group-hover:text-white/80 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}