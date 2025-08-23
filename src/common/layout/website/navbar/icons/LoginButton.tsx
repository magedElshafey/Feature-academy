import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../../../store/AuthProvider";
const LoginButton = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  return (
    <>
      {user ? (
        <button></button>
      ) : (
        <Link
          to="/auth/login"
          className="px-4 py-2 rounded-md flex items-center justify-center text-white bg-darkBlue"
        >
          {t("login")}
        </Link>
      )}
    </>
  );
};

export default LoginButton;
