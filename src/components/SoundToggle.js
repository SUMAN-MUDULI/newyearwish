// "use client";

// export default function SoundToggle({ enabled, onToggle }) {
//   return (
//     <button
//       onClick={onToggle}
//       className="fixed top-4 right-4 z-50 px-3 py-2 rounded-full
//                  bg-white/10 backdrop-blur-md text-white text-sm
//                  border border-white/20 hover:bg-white/20 transition"
//       aria-label="Toggle sound"
//     >
//       {enabled ? "🔊 Sound On" : "🔇 Tap for Sound"}
//     </button>
//   );
// }



"use client";

export default function SoundToggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 px-3 py-2 rounded-full
      bg-white/10 backdrop-blur-md text-white text-sm
      border border-white/20 hover:bg-white/20 transition"
    >
      {enabled ? "🔊 Sound On" : "🔇 Tap for Sound"}
    </button>
  );
}
