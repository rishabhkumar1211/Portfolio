/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0e27",
        secondary: "#6b7280",
        tertiary: "#111827",
        accent: "#10b981",
        "accent-light": "#34d399",
        "blue-accent": "#3b82f6",
        "black-100": "#1a202c",
        "black-200": "#0f172a",
        "white-100": "#f8fafc",
        "gray-dark": "#1e293b",
      },
      boxShadow: {
        card: "0px 20px 50px rgba(0, 0, 0, 0.3)",
        "card-hover": "0px 30px 60px rgba(16, 185, 129, 0.15)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
