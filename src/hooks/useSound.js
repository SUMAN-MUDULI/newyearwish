"use client";

import { useRef, useState } from "react";

export default function useSound() {
  const [enabled, setEnabled] = useState(false);

  const fireworkRef = useRef(null);
  const chimeRef = useRef(null);

  const init = () => {
    if (!fireworkRef.current) {
      fireworkRef.current = new Audio("/sounds/firework.mp3");
      fireworkRef.current.volume = 0.4;
    }
    if (!chimeRef.current) {
      chimeRef.current = new Audio("/sounds/chime.mp3");
      chimeRef.current.volume = 0.3;
    }
  };

  const toggle = () => {
    init();
    setEnabled((v) => !v);
  };

  const playFirework = () => {
    if (!enabled || !fireworkRef.current) return;
    fireworkRef.current.currentTime = 0;
    fireworkRef.current.play().catch(() => {});
  };

  const playChime = () => {
    if (!enabled || !chimeRef.current) return;
    chimeRef.current.currentTime = 0;
    chimeRef.current.play().catch(() => {});
  };

  return { enabled, toggle, playFirework, playChime };
}
