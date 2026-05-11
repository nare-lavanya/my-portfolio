import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, School, BookOpen } from "lucide-react";

const EDU = [
  {
    Icon: GraduationCap,
    title: "B.Tech – Computer Science Engineering",
    place: "Rami Reddy Subbarami Reddy Engineering College",
    period: "2022 – 2026",
    score: "CGPA: 8.7",
  },
  {
    Icon: School,
    title: "Higher Secondary Education",
    place: "Intermediate",
    period: "",
    score: "CGPA: 8.9",
  },
  {
    Icon: BookOpen,
    title: "Secondary Education",
    place: "SSC",
    period: "",
    score: "CGPA: 9.8",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Learning" title="Education" subtitle="Foundations that shaped my path.">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {EDU.map(({ Icon, title, place, period, score }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-secondary/40"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-primary-foreground shadow-lg shadow-accent/30">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{place}</p>
            {period && <p className="mt-0.5 text-xs text-muted-foreground">{period}</p>}
            <div className="mt-4 inline-flex items-center rounded-lg border border-secondary/40 bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
              {score}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
