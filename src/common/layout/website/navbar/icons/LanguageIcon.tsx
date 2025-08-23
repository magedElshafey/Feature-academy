import { IoLanguage } from "react-icons/io5";
import { useLanguage } from "../../../../../store/LanguageProvider";
const LanguageIcon = () => {
  const { language, changeLanguage } = useLanguage();
  return (
    <button
      onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
      aria-label={`Switch language to ${
        language === "ar" ? "English" : "Arabic"
      }`}
      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full"
    >
      <IoLanguage size={20} />
    </button>
  );
};

export default LanguageIcon;
