import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.52;
      const cy = height * 0.5;

      ctx.strokeStyle = "rgba(244,239,230,0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        const r = 48 + i * 38 + Math.sin(t * 0.0012 + i) * 6;
        ctx.beginPath();
        ctx.ellipse(cx, cy, r * 1.35, r * 0.72, Math.sin(t * 0.0003 + i) * 0.12, 0, Math.PI * 2);
        ctx.stroke();
      }

      const nodes = 14;
      ctx.lineWidth = 1.2;
      for (let i = 0; i < nodes; i++) {
        const a = (i / nodes) * Math.PI * 2 + t * 0.00035;
        const r = 118 + Math.sin(t * 0.001 + i) * 10;
        const x = cx + Math.cos(a) * r * 1.35;
        const y = cy + Math.sin(a) * r * 0.72;
        const x2 = cx + Math.cos(a + 1.1) * (r + 40) * 1.1;
        const y2 = cy + Math.sin(a + 1.1) * (r + 40) * 0.6;
        ctx.strokeStyle = i % 3 === 0 ? "rgba(196,92,38,0.35)" : "rgba(244,239,230,0.12)";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        ctx.fillStyle = i % 3 === 0 ? "#c45c26" : "rgba(244,239,230,0.7)";
        ctx.beginPath();
        ctx.arc(x, y, i % 3 === 0 ? 2.6 : 1.6, 0, Math.PI * 2);
        ctx.fill();
        if (i % 4 === 0) {
          ctx.strokeStyle = "rgba(244,239,230,0.08)";
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      ctx.fillStyle = "#0b0a09";
      ctx.beginPath();
      ctx.arc(cx, cy, 34, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(224,138,82,0.7)";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      ctx.fillStyle = "#f4efe6";
      ctx.font = "500 13px Outfit, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("agent", cx, cy - 2);
      ctx.fillStyle = "rgba(244,239,230,0.45)";
      ctx.font = "10px 'IBM Plex Mono', monospace";
      ctx.fillText("BOUNDED", cx, cy + 14);

      const barY = height - 42;
      const progress = 0.5 + Math.sin(t * 0.0011) * 0.08;
      ctx.fillStyle = "rgba(244,239,230,0.08)";
      ctx.fillRect(24, barY, width - 48, 3);
      ctx.fillStyle = "#c45c26";
      ctx.fillRect(24, barY, (width - 48) * (0.18 + progress * 0.12), 3);

      ctx.fillStyle = "rgba(244,239,230,0.45)";
      ctx.font = "10px 'IBM Plex Mono', monospace";
      ctx.textAlign = "left";
      ctx.fillText("3.5H SETUP", 24, barY - 10);
      ctx.textAlign = "right";
      ctx.fillText("8M  ·  3× VOLUME", width - 24, barY - 10);

      if (!reduce) {
        t += 16;
        raf = requestAnimationFrame(draw);
      }
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw();
    });
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" />;
}
