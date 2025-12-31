"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [yourName, setYourName] = useState("");
  const [friendName, setFriendName] = useState("");

  useEffect(() => {
    document.body.style.background =
      "radial-gradient(circle at bottom, #2b1055, #000)";
  }, []);

const handleShare = () => {
  if (!yourName || !friendName) {
    alert("Please enter both names");
    return;
  }

  // ✅ CURRENT DOMAIN AUTO-DETECT
  const baseUrl = window.location.origin;

  const url = `${baseUrl}/wish?to=${encodeURIComponent(
    friendName.trim()
  )}&from=${encodeURIComponent(yourName.trim())}`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
  window.location.href = whatsappUrl;
};



  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
        <h1 className="text-2xl font-extrabold text-center mb-2">
          🎉 New Year Surprise 🎉
        </h1>

        <p className="text-center text-sm text-gray-300 mb-6">
          Create a magical wish for your friend ✨
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/20 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Friend's Name"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/20 focus:outline-none"
          />

          <button
            onClick={handleShare}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 font-semibold text-lg"
          >
            📲 Send on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
