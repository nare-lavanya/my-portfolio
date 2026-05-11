import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse-glow" />
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
