import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="pt-14 sm:pt-16 pb-12">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-glow">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_top,rgba(185,198,255,0.25),transparent_55%)]" />
        <div className="relative p-7 sm:p-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-sm text-white/60"
          >
            {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-3 text-lg sm:text-xl text-white/75"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 max-w-2xl text-white/65 whitespace-pre-line"
          >
            {profile.headline}
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
