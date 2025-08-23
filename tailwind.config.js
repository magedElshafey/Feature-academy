/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        din: ["DINNextLTArabic", "sans-serif"],
      },
      colors: {
        background: {
          light: "#ffffff",
          dark: "#0f172a",
        },
        text: {
          light: "#1e293b",
          dark: "#f8fafc",
          gray: "#828282",
        },
        darkBlue: "#0642BC",
        lightBlue: "#3274FF",
      },
    },
  },
  plugins: [typography],
};
