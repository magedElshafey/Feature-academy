import { Outlet } from "react-router-dom";
import BgImg from "./BgImg";
import Logo from "../../components/logo/Logo";
import logo from "../../../assets/logo.png";
const AuthLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div className="w-full md:w-1/2 mt-5 md:mt-0">
        <div className="containerr">
          <div className="w-full flex-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
            <Logo logo={logo} />
          </div>
          <Outlet />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <BgImg />
      </div>
    </div>
  );
};

export default AuthLayout;
