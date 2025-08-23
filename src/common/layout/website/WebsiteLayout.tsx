import { Outlet } from "react-router-dom";
const WebsiteLayout = () => {
  return (
    <div>
      <p>WebsiteLayout</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default WebsiteLayout;
