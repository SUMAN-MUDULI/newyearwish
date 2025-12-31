"use client";

import { useEffect, useState } from "react";

export default function FullBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 90; i++) {
      temp.push({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 8 + Math.random() * 14,
        delay: Math.random() * 8,
      });
    }
    setParticles(temp);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden full-bg">
      {particles.map((p) => (
        <span
          key={p.id}
          className="bg-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
