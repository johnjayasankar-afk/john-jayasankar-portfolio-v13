import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -40, y: -40 });
  const [grow, setGrow] = useState(false);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer:fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setOn(true);
    const move = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      setGrow(Boolean(t?.closest("a, button, input")));
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, []);

  if (!on) return null;
  return <div className={`cursor${grow ? " grow" : ""}`} style={{ left: pos.x, top: pos.y }} />;
}
