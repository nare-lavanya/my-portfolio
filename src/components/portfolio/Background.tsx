// Animated background: gradient blobs + grid + cursor glow
import { useEffect, useState } from "react";

export function Background() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base hero glow */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Floating blobs */}
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-secondary/30 blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-accent/25 blur-3xl animate-blob [animation-delay:-12s]" />

      {/* Cursor glow */}
      <div
        className="absolute h-[400px] w-[400px] rounded-full opacity-40 blur-3xl transition-transform duration-300 ease-out"
        style={{
          left: pos.x - 200,
          top: pos.y - 200,
          background:
            "radial-gradient(circle, oklch(0.78 0.18 210 / 0.5), transparent 70%)",
        }}
      />
    </div>
  );
}
