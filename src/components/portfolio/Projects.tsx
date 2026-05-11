import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website using React and CSS to showcase skills, certifications, and projects professionally.",
    tags: ["React", "CSS", "Framer Motion", "Tailwind"],
    gradient: "from-primary/40 via-secondary/30 to-accent/40",
    icon: "💼",
  },
  {
    title: "E-Commerce Fraud Detection System",
    description:
      "Developing a machine learning-based system to detect fraudulent transactions by analyzing customer behavior and transaction patterns.",
    tags: ["Python", "Machine Learning", "Pandas", "scikit-learn"],
    gradient: "from-secondary/40 via-accent/30 to-primary/40",
    icon: "🛡️",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work" subtitle="A selection of things I've built and am building.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group glass relative overflow-hidden rounded-2xl"
          >
            {/* Visual */}
            <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
              <div className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="absolute inset-0 grid place-items-center text-7xl transition-transform duration-500 group-hover:scale-110">
                {p.icon}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground transition hover:border-secondary/40 hover:text-secondary"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:-translate-y-0.5"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
              </div>
            </div>

            {/* Animated border glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ boxShadow: "0 0 40px oklch(0.65 0.24 295 / 0.4), inset 0 0 20px oklch(0.78 0.18 210 / 0.15)" }}
            />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
