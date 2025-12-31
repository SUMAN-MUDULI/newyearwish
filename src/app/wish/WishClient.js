"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FestiveBackground from "../../components/FestiveBackground";
import FireworkBurst from "../../components/FireworkBurst";
import SoundToggle from "../../components/SoundToggle";
import useSound from "../../hooks/useSound";
import FullBackground from "../../components/FullBackground";
// import ThemeSwitcher from "../../components/ThemeSwitcher";

export default function WishClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const to = searchParams.get("to");
  const from = searchParams.get("from");

  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  const { enabled, toggle, playFirework, playChime } = useSound();

  // redirect if params missing
  useEffect(() => {
    if (!to || !from) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, [to, from, router]);

  if (!to || !from) return null;

  return (
    <div className="min-h-screen relative bg-black text-white flex items-center justify-center px-4 overflow-hidden">
      {/* 🌌 Full animated background */}
      <FullBackground />

      {/* 🎆 Festive layer */}
      <FestiveBackground />

      {/* 🎨 Theme switcher (optional) */}
      {/* <ThemeSwitcher /> */}

      {/* 🔊 Sound Toggle */}
      <SoundToggle enabled={enabled} onToggle={toggle} />

      {/* 👆 Tap to Start (required for sound) */}
      {!started && (
        <div
          onClick={() => setStarted(true)}
          className="fixed inset-0 z-50 flex items-center justify-center
          bg-black/90 text-white text-xl font-semibold cursor-pointer"
        >
          🎆 Tap to Start the Surprise 🎆
        </div>
      )}

      {/* 🎬 Main Content */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-lg text-gray-300"
          >
            ✨ Preparing something special for {to}...
          </motion.div>
        ) : (
          <motion.div
            key="wish"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center space-y-6"
          >
            {/* 🎉 Name Reveal + Firework */}
            <div className="relative inline-block">
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1], // Apple-like easing
                }}
                className="text-4xl font-extrabold tracking-wide firework-glow relative z-10"
              >
                🎉 {to.toUpperCase()} 🎉
              </motion.h1>

              {/* 🔥 ONE-TIME Firework Burst */}
              {started && <FireworkBurst onBoom={playFirework} />}
            </div>

            {/* ✨ Wish Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              onAnimationStart={() => {
                if (started) playChime();
              }}
              className="text-xl"
            >
              Happy New Year 2026 ✨
            </motion.p>

            {/* 💖 From */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-sm text-gray-400"
            >
              From {from} 💖
            </motion.p>

            {/* 🔁 Share Again */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              onClick={() => router.push("/")}
              className="mt-6 px-6 py-3 rounded-lg
              bg-gradient-to-r from-purple-500 to-pink-600
              font-semibold hover:opacity-90 transition"
            >
              🎁 Send Wish to Your Friend
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
