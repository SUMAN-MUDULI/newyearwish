"use client";

import { useEffect, useState } from "react";

export default function FireworkBurst({ onBoom }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // 🔊 play sound once (after user tap)
    if (onBoom) onBoom();

    // 🎆 generate particles
    const temp = [];
    for (let i = 0; i < 24; i++) {
      temp.push({
        id: i,
        x: `${Math.random() * 240 - 120}px`,
        y: `${Math.random() * 240 - 120}px`,
        size: `${4 + Math.random() * 4}px`,
        delay: `${Math.random() * 0.15}s`,
      });
    }
    setParticles(temp);

    // 🧹 auto cleanup after animation
    const timer = setTimeout(() => {
      setParticles([]);
    }, 1400);

    return () => clearTimeout(timer);
  }, [onBoom]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="firework-particle"
          style={{
            "--x": p.x,
            "--y": p.y,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
