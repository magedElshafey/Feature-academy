import CartIcon from "../icons/CartIcon";
import NotifcationIcon from "../icons/NotifcationIcon";
import LanguageIcon from "../icons/LanguageIcon";
import LoginButton from "../icons/LoginButton";
import ThemeToggle from "../../../common/ThemeToggle";
import ChatIcon from "../icons/ChatIcon";
import type { User } from "../../../../../types/User";
interface NavIconsProps {
  user: User | null;
}

const NavIcons: React.FC<NavIconsProps> = ({ user }) => {
  return (
    <div className="flex items-center gap-x-2 sm:gap-x-3 shrink-0">
      <CartIcon />
      <NotifcationIcon />
      <ChatIcon />
      <ThemeToggle />
      <LanguageIcon />

      <div className="hidden sm:block">
        <LoginButton />
      </div>
    </div>
  );
};

export default NavIcons;
