"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <button onClick={() => setTheme("diwali")} className={btn(theme === "diwali")}>
        🪔 Diwali
      </button>
      <button onClick={() => setTheme("newyear")} className={btn(theme === "newyear")}>
        🎆 New Year
      </button>
      <button onClick={() => setTheme("birthday")} className={btn(theme === "birthday")}>
        🎂 Birthday
      </button>
    </div>
  );
}

function btn(active) {
  return `
    px-3 py-2 rounded-full text-sm font-semibold
    ${active ? "bg-white text-black" : "bg-white/20 text-white"}
    backdrop-blur-md transition
  `;
}
