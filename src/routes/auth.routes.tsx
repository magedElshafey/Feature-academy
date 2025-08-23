import { lazyLoad } from "../utils/LazyLoad";
import Guard from "./Guard";

export const authRoutes = {
  element: <Guard guestOnly={true} />,
  children: [
    {
      path: "auth",
      element: lazyLoad(() => import("../common/layout/auth/AuthLayout")),
      children: [
        {
          path: "login",
          element: lazyLoad(() => import("../features/auth/pages/Login")),
        },
        {
          path: "register",
          element: lazyLoad(() => import("../features/auth/pages/Register")),
        },
      ],
    },
  ],
};
