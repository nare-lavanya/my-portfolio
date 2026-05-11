import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-semibold text-gradient">Nare Lavanya</span>. Built with{" "}
          <Heart className="inline h-3.5 w-3.5 fill-accent text-accent" /> and React.
        </div>
        <div className="flex gap-2">
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
              className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-foreground/5 text-muted-foreground transition hover:-translate-y-0.5 hover:border-secondary/50 hover:text-secondary hover:shadow-[0_0_20px_oklch(0.78_0.18_210/0.5)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
