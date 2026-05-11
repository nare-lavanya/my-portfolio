import { motion } from "framer-motion";
import { Section } from "./Section";
import { BadgeCheck } from "lucide-react";

const CERTS = [
  { title: "Cloud Computing", org: "NPTEL" },
  { title: "Python Web Developer", org: "Infosys + ICT Academy" },
  { title: "Machine Learning", org: "SkillDzire" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications" subtitle="Continuously upskilling through verified programs.">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-secondary/40"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary/20 blur-2xl" />
            <BadgeCheck className="h-9 w-9 text-secondary transition-transform group-hover:scale-110" />
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
