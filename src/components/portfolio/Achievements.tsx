import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "./Section";
import { Trophy, Award, Code2, Star } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => (Number.isInteger(to) ? Math.round(v).toString() : v.toFixed(1)));

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const ITEMS = [
  { Icon: Trophy, title: "Department Topper", desc: "Recognized for top academic performance", stat: 1, suffix: "st" },
  { Icon: Award, title: "Technical Quiz Winner", desc: "1st Prize in college technical quiz competition", stat: 1, suffix: "st" },
  { Icon: Code2, title: "HackerRank Solver", desc: "Solved Java problems on HackerRank consistently", stat: 100, suffix: "+" },
  { Icon: Star, title: "B.Tech CGPA", desc: "Strong academic record across semesters", stat: 8.7, suffix: "" },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements" subtitle="Milestones that keep me motivated.">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ Icon, title, desc, stat, suffix }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-secondary/40"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/30">
              <Icon className="h-6 w-6" />
            </div>
            <div className="font-display text-3xl font-bold text-gradient">
              <Counter to={stat} suffix={suffix} />
            </div>
            <h3 className="mt-1 text-sm font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
