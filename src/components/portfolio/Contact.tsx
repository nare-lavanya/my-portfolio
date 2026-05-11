import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Send, Github, Linkedin, Code2 } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <Section id="contact" eyebrow="Get in Touch" title="Let's Connect" subtitle="Have an opportunity or just want to say hi?">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 lg:col-span-2"
        >
          <h3 className="font-display text-xl font-bold text-foreground">Reach out</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            I'm open to internships, freelance projects, and collaborations. Drop a message and I'll respond shortly.
          </p>

          <a
            href="mailto:narelavanya2005@gmail.com"
            className="mt-5 flex items-center gap-3 rounded-xl border border-border bg-foreground/5 px-4 py-3 transition hover:border-secondary/40"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Email</div>
              <div className="text-sm font-semibold text-foreground">narelavanya2005@gmail.com</div>
            </div>
          </a>

          <div className="mt-5">
            <div className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">Social</div>
            <div className="flex gap-2">
              {[
                { Icon: Github, label: "GitHub", href: "https://github.com/" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
                { Icon: Code2, label: "HackerRank", href: "https://hackerrank.com/" },
                { Icon: Mail, label: "Email", href: "mailto:narelavanya2005@gmail.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-foreground/5 text-muted-foreground transition hover:-translate-y-0.5 hover:border-secondary/50 hover:text-secondary hover:shadow-[0_0_20px_oklch(0.78_0.18_210/0.5)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="glass rounded-2xl p-6 lg:col-span-3"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input name="name" label="Name" placeholder="Your name" required />
            <Input name="email" type="email" label="Email" placeholder="you@example.com" required />
          </div>
          <Input name="subject" label="Subject" placeholder="What's this about?" required className="mt-4" />
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me a bit about your project or idea..."
              className="w-full resize-none rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-secondary/60 focus:ring-2 focus:ring-secondary/30"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Input({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-secondary/60 focus:ring-2 focus:ring-secondary/30"
      />
    </div>
  );
}
