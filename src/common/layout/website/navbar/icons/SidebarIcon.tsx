import { GiHamburgerMenu } from "react-icons/gi";

interface SidebarIcon {
  openSidebar: () => void;
}
const SidebarIcon: React.FC<SidebarIcon> = ({ openSidebar }) => {
  return (
    <button onClick={openSidebar} className="lg:hidden">
      <GiHamburgerMenu size={20} className="text-lightBlue" />
    </button>
  );
};

export default SidebarIcon;
