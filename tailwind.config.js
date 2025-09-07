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
          babyBlue: "#F0EDFFCC",
        },
        text: {
          light: "#1e293b",
          dark: "#f8fafc",
          gray: "#828282",
          red: "#FF0000",
        },
        darkBlue: "#0642BC",
        lightBlue: "#3274FF",
      },
    },
  },
  plugins: [typography],
};
