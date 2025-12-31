"use client";

export default function FestiveBackground() {
  return (
    <div className="absolute overflow-hidden festive-bg festive-wrapper">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={`float-${i}`}
          className="festive-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
          }}
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`rocket-${i}`}
          className="firework-rocket"
          style={{
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
