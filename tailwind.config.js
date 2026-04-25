/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.05), 0 20px 60px rgba(15, 23, 42, 0.45)",
      },
      colors: {
        ink: {
          950: "#020617",
          900: "#07111f",
        },
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
      },
      fontFamily: {
        sans: ["'Manrope'", "'Avenir Next'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
