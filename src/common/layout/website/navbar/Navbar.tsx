import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../../../store/AuthProvider";
import Logo from "../../../components/logo/Logo";
import logo from "../../../../assets/logo.png";
import SidebarIcon from "./icons/SidebarIcon";
import Sidebar from "../sidebar/Sidebar";
import NavIcons from "./navIcons/NavIcons";
import WebsiteLinks from "./links/WebsiteLinks";
const Navbar = () => {
  const { user } = useAuth();
  const [showSidebar, setShowSidebar] = useState(false);
  const openSidebar = useCallback(() => setShowSidebar(true), []);
  const closeSidebar = useCallback(() => setShowSidebar(false), []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setShowSidebar(false);
    };
    // run once on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <header className="bg-background-light dark:bg-background-dark w-full shadow-lg fixed top-0 left-0 z-40">
        <div className="containerr flex-between gap-4 h-16">
          <div className="flex items-center gap-3">
            {/* sidebar icon */}
            <SidebarIcon openSidebar={openSidebar} />
            <Logo logo={logo} />
          </div>
          {/* website links */}
          <WebsiteLinks />
          <NavIcons user={user} />
        </div>
      </header>
      <Sidebar isOpen={showSidebar} onClose={closeSidebar} />
    </>
  );
};

export default Navbar;
