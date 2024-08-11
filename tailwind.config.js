/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // This enables dark mode
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        // Custom colors based on the design
        primary: "#4A96FF", // Blue
        secondary: "#27292D",
        tertiary: "#191920",
        textSecondary: "#6B6C70",
        background: {
          light: "#F3F4F6",
          dark: "#131319",
        },
        text: {
          light: "#1F2937",
          dark: "#F9FAFB",
          secondary: "#6B6C70",
          label: "#C5C7CA",
          textLow: "#7F8084",
        },
        borders: {
          secondary: "#35373B",
        },
      },
    },
  },
  plugins: [],
};
