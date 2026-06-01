// CursorGlow.jsx
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const move = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top  = `${e.clientY}px`;
    };

    const expand = () => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = "translate(-50%, -50%) scale(1.6)";
      glowRef.current.style.opacity   = "0.5";
    };

    const shrink = () => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      glowRef.current.style.opacity   = "1";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", expand);
    window.addEventListener("mouseup",   shrink);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", expand);
      window.removeEventListener("mouseup",   shrink);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position:     "fixed",
        width:        "480px",
        height:       "480px",
        borderRadius: "50%",
        transform:    "translate(-50%, -50%)",
        background:   "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex:       99999,
        transition:   "transform 0.25s ease, opacity 0.25s ease",
      }}
    />
  );
}