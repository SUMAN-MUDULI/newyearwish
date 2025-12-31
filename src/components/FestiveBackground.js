"use client";

export default function FestiveBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden festive-bg">
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
