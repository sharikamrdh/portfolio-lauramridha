export const profile = {
  name: "Laura Mridha",
  role: "Étudiante MIAGE — Développeuse Full-Stack",
  headline:
    "Passionnée pour les projets Backend, Frontend, Intelligence Artificielle et Data.\nRecherche d’un stage de 10 à 16 semaines à partir d’avril 2026",
  location: "Paris, France",
};


export const skills = [
  { title: "Langage", items: ["C", "Java", "HTML", "CSS", "JavaScript", "PHP", "Python", "SQL"] },
  { title: "Frontend", items: ["React", "TypeScript", "Angular", "Tailwind", "Framer Motion", "CSS"] },
  { title: "Backend", items: ["Django", "Node.js", "PHP", "REST APIs"] },
  { title: "Data / DB", items: ["PostgreSQL", "MySQL", "Modélisation"] },
  { title: "Outils", items: ["Git/GitHub", "MySQLWorkbench", "Vite", "VSCode", "MacOS", "Excel", "PowerPoint", "Word"] },
];

export const projects = [
  {
    name: "QuizzIAcademique",
    desc: "Plateforme de révision : génération de QCM à partir de cours, suivi des tentatives, analytics.",
    tags: ["Angular", "Django", "PostgreSQL", "Ollama (IA)", "Bootstrap", "Python"],
    link: "https://github.com/sharikamrdh/QuizzIAcademique",
  },
  {
    name: "Site compression/décompression de fichiers",
    desc: "réduire la taille du fichier et de décompresser le fichier à son état original.",
    tags: ["Python", "C++", "HTML", "CSS"],
    link: "https://github.com/sharikamrdh/PROJETINFORMATIQUE",
  },
  {
    name: "Jeu Psychologique 2D",
    desc: "Conception d’un jeu d’horreur psychologique en 2D reposant sur une narration adaptative pilotée par une intelligence artificielle",
    tags: ["Ollama (IA)", "JavaScript", "Python", "HTML", "CSS"],
    link: "https://sharikamrdh.github.io/PROJETFINALL2/",
  },
];

export const featuredAI = {
  title: "Projet phare — IA de génération de quiz",
  pitch:
    "Pipeline : upload de documents → extraction → génération de questions structurées → interface de révision + historique.",
  bullets: [
    "Format JSON strict pour des QCM fiables",
    "Streaming / temps réel côté UI",
    "Stockage des tentatives + scoring + progression",
  ],
};
