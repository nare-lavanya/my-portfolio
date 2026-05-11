import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiPython,
  SiMysql, SiSpring, SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const SKILLS = [
  { name: "HTML", Icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", Icon: SiCss3, color: "#1572b6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Java", Icon: FaJava, color: "#ef8b2c" },
  { name: "Python", Icon: SiPython, color: "#3776ab" },
  { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
  { name: "Spring", Icon: SiSpring, color: "#6db33f" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "VS Code", Icon: VscVscode, color: "#007acc" },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Tech Stack" title="Skills & Tools" subtitle="Technologies I work with daily.">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="glass group relative flex flex-col items-center justify-center gap-3 rounded-2xl p-6 transition-all hover:border-secondary/40"
          >
            <div
              className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
              style={{ background: `radial-gradient(circle, ${skill.color}55, transparent 70%)` }}
            />
            <skill.Icon
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
              style={{ color: skill.color }}
            />
            <span className="text-sm font-semibold text-foreground">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
