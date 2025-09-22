import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#00D4AA",     // SoundScout primary teal
          blue: "#3B82F6",     // SoundScout blue
          indigo: "#4F46E5",   // SoundScout indigo
          purple: "#6366F1",   // SoundScout purple
          dark: "#0B0B0C",     // Background dark
          gray: "#1a1a1a",     // Card backgrounds
        },
      },
      backgroundImage: {
        "sound-gradient":
          "radial-gradient(1000px 500px at 20% 10%, rgba(0,212,170,0.25), transparent 60%), radial-gradient(1000px 500px at 80% 20%, rgba(99,102,241,0.20), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,212,170,0.25), 0 0 60px rgba(99,102,241,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;