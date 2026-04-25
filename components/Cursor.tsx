"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);

    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const tick = () => {
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const setHover = (active: boolean) => {
      if (!ring.current) return;
      ring.current.dataset.hover = active ? "true" : "false";
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
      );
      setHover(!!interactive);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="fixed top-0 left-0 z-[100] size-1 rounded-full bg-[#0A0A0A] pointer-events-none"
        style={{ mixBlendMode: "difference", filter: "invert(1)" }}
      />
      <div
        ref={ring}
        aria-hidden
        data-hover="false"
        className="fixed top-0 left-0 z-[100] size-8 rounded-full border border-[#0A0A0A]/40 pointer-events-none transition-[width,height,border-color,background-color] duration-200 ease-out data-[hover=true]:size-12 data-[hover=true]:bg-[#F97316]/15 data-[hover=true]:border-[#F97316]/50"
      />
      <style>{`
        @media (pointer: fine) {
          html, body { cursor: none; }
          a, button, [role="button"], input, textarea, select, [data-cursor="hover"] { cursor: none; }
        }
      `}</style>
    </>
  );
}
