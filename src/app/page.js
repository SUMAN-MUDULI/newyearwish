"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [yourName, setYourName] = useState("");
  const [friendName, setFriendName] = useState("");
  const [particles, setParticles] = useState([]);

  // 🎆 Background particles generate (auto)
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 70; i++) {
      temp.push({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 10 + Math.random() * 15,
        delay: Math.random() * 10,
        opacity: 0.4 + Math.random() * 0.6,
      });
    }
    setParticles(temp);
  }, []);

  // 📲 WhatsApp Share (IMAGE-FOCUS trick)
  const handleShare = () => {
    if (!yourName || !friendName) {
      alert("Please enter both names");
      return;
    }

    const url = `https://yourwish.site/wish?to=${encodeURIComponent(
      friendName
    )}&from=${encodeURIComponent(yourName)}`;

    // invisible char + link → WhatsApp shows OG IMAGE mostly
    const invisibleChar = "";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      invisibleChar + url
    )}`;

    window.location.href = whatsappUrl;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4">

      {/* 🔥 FULL SCREEN ANIMATED BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-black" />

        {/* floating festive particles */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute bottom-[-20px] rounded-full"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              background:
                "radial-gradient(circle, #ffd27d, #ff8fab)",
              boxShadow:
                "0 0 10px rgba(255,183,3,0.8), 0 0 20px rgba(236,72,153,0.6)",
              animation: `floatUp ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 🧱 MAIN CARD */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
        <h1 className="text-2xl font-extrabold text-center mb-2">
          🎉 New Year Surprise 🎉
        </h1>

        <p className="text-center text-sm text-gray-300 mb-6">
          Create a magical wish that shocks your friend 😱✨
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/20
            focus:outline-none focus:border-white"
          />

          <input
            type="text"
            placeholder="Friend's Name"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/20
            focus:outline-none focus:border-white"
          />

          <button
            onClick={handleShare}
            className="w-full py-3 rounded-lg
            bg-gradient-to-r from-pink-500 to-purple-600
            font-semibold text-lg hover:opacity-90 transition"
          >
            📲 Send on WhatsApp
          </button>
        </div>

        <p className="mt-4 text-xs text-center text-gray-400">
          👆 Your friend will see a surprise image — tap to open 🎁
        </p>
      </div>

      {/* 🎨 INLINE KEYFRAMES */}
      <style jsx>{`
        @keyframes floatUp {
          from {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          to {
            transform: translateY(-120vh) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
