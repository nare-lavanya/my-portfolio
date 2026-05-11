import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const EXP = [
  {
    role: "Java Full Stack Intern",
    company: "Tap Academy",
    period: "Currently",
    points: [
      "Learning Java, JDBC, Servlets, and Spring fundamentals",
      "Working on full stack development using HTML, CSS, JavaScript, and MySQL",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "SkillDzire",
    period: "Internship",
    points: [
      "Gained hands-on experience in machine learning fundamentals",
      "Worked on data preprocessing and ML models",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience" subtitle="Where I've learned and contributed.">
      <div className="relative mx-auto max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-10">
          {EXP.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative grid grid-cols-1 items-center gap-4 sm:grid-cols-2 ${
                  left ? "" : "sm:[&>*:first-child]:col-start-2"
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 top-3 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center sm:left-1/2">
                  <span className="absolute h-4 w-4 rounded-full bg-secondary/30 animate-ping" />
                  <span className="relative h-3 w-3 rounded-full bg-gradient-primary ring-2 ring-background" />
                </div>

                <div className={`pl-10 sm:pl-0 ${left ? "sm:pr-10 sm:text-right" : "sm:col-start-2 sm:pl-10"}`}>
                  <div className="glass inline-block w-full rounded-2xl p-5 text-left transition hover:border-secondary/40 sm:text-left">
                    <div className="mb-2 flex items-center gap-2 text-xs font-medium text-secondary">
                      <Briefcase className="h-3.5 w-3.5" /> {item.period}
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.role}</h3>
                    <div className="text-sm text-muted-foreground">{item.company}</div>
                    <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
