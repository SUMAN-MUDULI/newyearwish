"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FestiveBackground from "../../components/FestiveBackground";
import FireworkBurst from "../../components/FireworkBurst";
import SoundToggle from "../../components/SoundToggle";
import useSound from "../../hooks/useSound";
import FullBackground from "../../components/FullBackground";

export default function WishClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const rawTo = searchParams.get("to");
  const rawFrom = searchParams.get("from");

  const to = rawTo?.trim();
  const from = rawFrom?.trim();

  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  const { enabled, toggle, playFirework, playChime } = useSound();

  // Redirect if params missing
  useEffect(() => {
    if (!to || !from) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, [to, from, router]);

  // 🔔 Play chime AFTER user tap + loading finished
  useEffect(() => {
    if (started && !loading) {
      playChime();
    }
  }, [started, loading, playChime]);

  if (!to || !from) return null;

  return (
    <div className="min-h-screen relative bg-black text-white flex items-center justify-center px-4 overflow-hidden">
      <FullBackground />
      <FestiveBackground />

      {/* 🔊 Sound toggle */}
      <SoundToggle enabled={enabled} onToggle={toggle} />

      {/* 👆 Tap to Start */}
      {!started && (
        <div
          onClick={() => {
            toggle();       // enable sound
            setStarted(true);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center
          bg-black/90 text-white text-xl font-semibold cursor-pointer"
        >
          🎆 Tap to Start the Surprise 🎆
        </div>
      )}

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
            {/* 🎉 Name */}
            <div className="relative inline-block">
              <motion.h1
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl font-extrabold tracking-wide firework-glow relative z-10"
              >
                🎉 {to.toUpperCase()} 🎉
              </motion.h1>

              {started && <FireworkBurst onBoom={playFirework} />}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl"
            >
              Happy New Year 2026 ✨
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-sm text-gray-400"
            >
              From {from} 💖
            </motion.p>

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
