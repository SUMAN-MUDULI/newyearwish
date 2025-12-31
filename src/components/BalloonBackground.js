"use client";

export default function BalloonBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="balloon" />
      ))}
    </div>
  );
}
