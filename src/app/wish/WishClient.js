"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FestiveBackground from "../../components/FestiveBackground";
import FireworkBurst from "../../components/FireworkBurst";
import SoundToggle from "../../components/SoundToggle";
import useSound from "../../hooks/useSound";

export default function WishClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const to = searchParams.get("to")?.trim();
  const from = searchParams.get("from")?.trim();

  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  const { enabled, toggle, playFirework, playChime } = useSound();

  useEffect(() => {
    if (!to || !from) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, [to, from, router]);

  useEffect(() => {
    if (started && !loading) {
      playChime();
    }
  }, [started, loading, playChime]);

  if (!to || !from) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden  text-white">
      {/* 🎆 Background animation */}
      <FestiveBackground />

      {/* 🔊 Sound toggle */}
      <SoundToggle enabled={enabled} onToggle={toggle} />

      {/* 👆 Tap to Start */}
      {!started && (
        <div
          onClick={() => {
            toggle();
            setStarted(true);
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center
          bg-black/90 backdrop-blur-md text-white text-center cursor-pointer px-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="text-3xl">🎆</div>
            <div className="text-xl font-semibold tracking-wide">
              Tap to Start
            </div>
            <div className="text-sm text-gray-400">
              A surprise is waiting for you
            </div>
          </motion.div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-base sm:text-lg text-gray-300"
          >
            ✨ Preparing something special for <br />
            <span className="font-semibold text-white">{to}</span>
          </motion.div>
        ) : (
          <motion.div
            key="wish"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-md text-center space-y-6
            bg-white/10 backdrop-blur-xl border border-white/20
            rounded-3xl px-6 py-8 shadow-2xl"
          >
            {/* 🎉 Name */}
            <div className="relative inline-block">
              <motion.h1
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-3xl sm:text-4xl font-extrabold tracking-wide firework-glow"
              >
                🎉 {to.toUpperCase()} 🎉
              </motion.h1>

              {started && <FireworkBurst onBoom={playFirework} />}
            </div>

            {/* ✨ Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg sm:text-xl font-medium"
            >
              Happy New Year 2026 ✨
            </motion.p>

            {/* 💖 From */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-sm text-gray-300"
            >
              From <span className="font-semibold text-white">{from}</span> 💖
            </motion.p>

            {/* 🔁 CTA */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              onClick={() => router.push("/")}
              className="w-full mt-4 py-3 rounded-xl
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
              font-semibold text-base shadow-lg
              active:scale-95 transition"
            >
              🎁 Create Your Own Surprise
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
