/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#4A96FF", // Blue
        secondary: "#27292D",
        tertiary: "#191920",
        textLabel: "#C5C7CA",
        textLow: "#7F8084",
        textSecondary: "#6B6C70",
        borderLow: "#35373B",
      },
    },
  },
  plugins: [],
};
