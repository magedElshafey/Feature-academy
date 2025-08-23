import { useTheme } from "../../../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { BiSolidSun } from "react-icons/bi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full"
    >
      {theme === "light" ? <MdDarkMode size={20} /> : <BiSolidSun size={20} />}
    </button>
  );
}
