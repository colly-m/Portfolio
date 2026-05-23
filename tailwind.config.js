/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8",
        },
        secondary: "#64748b",
        background: "#0f172a",
        foreground: "#f1f5f9",
      },
    },
  },
  plugins: [],
}