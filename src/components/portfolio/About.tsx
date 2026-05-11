import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Code, Rocket, Heart } from "lucide-react";

const HIGHLIGHTS = [
  { Icon: GraduationCap, label: "CSE Student", value: "B.Tech 2022–2026" },
  { Icon: Code, label: "Focus", value: "Full Stack Dev" },
  { Icon: Rocket, label: "Currently", value: "Java Full Stack Intern" },
  { Icon: Heart, label: "Loves", value: "Building Web Apps" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Who I Am" subtitle="A short intro about my journey and what drives me.">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-2xl p-8 lg:col-span-3"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
          <p className="relative text-base leading-relaxed text-foreground/85 sm:text-lg">
            Motivated <span className="font-semibold text-gradient">Computer Science Engineering</span> student
            with a strong interest in full stack development, Java programming, and modern web technologies.
            I'm skilled in building responsive websites and continuously learning new technologies to improve
            my development skills.
          </p>
          <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">
            I love crafting clean, performant, and beautiful interfaces — and turning ideas into production-ready
            products. When I'm not coding, you'll find me solving DSA problems or exploring new tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-3 lg:col-span-2"
        >
          {HIGHLIGHTS.map(({ Icon, label, value }, i) => (
            <motion.div
              key={label}
              whileHover={{ y: -4 }}
              className="glass group rounded-xl p-4 transition hover:border-secondary/40"
            >
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/30">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
              <div className="mt-0.5 text-sm font-semibold text-foreground">{value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
