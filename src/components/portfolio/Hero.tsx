import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin, Code2, Sparkles } from "lucide-react";
import lavanyaImg from "@/assets/lavanya.jpeg";

const ROLES = [
  "Full Stack Developer",
  "Java Enthusiast",
  "CSE Student",
  "Problem Solver",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = del ? 45 : 80;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setIdx((i) => (i + 1) % ROLES.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-secondary align-middle" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 sm:pt-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-secondary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Available for internships & collaborations
          </motion.div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-gradient">Nare Lavanya</span>
          </h1>

          <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
            <Typewriter />
          </p>

          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground lg:mx-0">
            Passionate about building responsive and user-friendly web applications using
            modern technologies and continuously learning new skills.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-secondary/50 hover:bg-foreground/10"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-secondary/40 bg-secondary/10 px-5 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary/20"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {[
              { Icon: Github, href: "https://github.com/", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { Icon: Code2, href: "https://hackerrank.com/", label: "HackerRank" },
              { Icon: Mail, href: "mailto:lavanya@example.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="group grid h-10 w-10 place-items-center rounded-lg border border-border bg-foreground/5 text-muted-foreground transition hover:-translate-y-0.5 hover:border-secondary/50 hover:text-secondary hover:shadow-[0_0_20px_oklch(0.78_0.18_210/0.5)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative animate-float">
            {/* Rotating gradient ring */}
            <div className="absolute -inset-4 rounded-full opacity-80 animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, oklch(0.65 0.24 295), oklch(0.78 0.18 210), oklch(0.72 0.22 350), oklch(0.65 0.24 295))",
                filter: "blur(18px)",
              }}
            />
            <div className="absolute -inset-2 rounded-full opacity-60 animate-spin-slow [animation-direction:reverse]"
              style={{
                background:
                  "conic-gradient(from 180deg, oklch(0.78 0.18 210), oklch(0.65 0.24 295), oklch(0.78 0.18 210))",
              }}
            />

            <div className="relative h-64 w-64 overflow-hidden rounded-full ring-2 ring-secondary/50 shadow-[0_0_60px_oklch(0.65_0.24_295/0.6)] sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]">
              <img
                src={lavanyaImg}
                alt="Nare Lavanya"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20" />
            </div>

            {/* Floating chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="glass absolute -left-6 top-6 hidden rounded-xl px-3 py-2 text-xs font-medium shadow-lg sm:block"
            >
              <span className="text-secondary">{"<"}</span> React <span className="text-secondary">/{">"}</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="glass absolute -right-4 bottom-10 hidden rounded-xl px-3 py-2 text-xs font-medium shadow-lg sm:block"
            >
              ☕ Java
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="glass absolute -bottom-2 left-1/2 hidden -translate-x-1/2 rounded-xl px-3 py-2 text-xs font-medium shadow-lg md:block"
            >
              🚀 Full Stack
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
