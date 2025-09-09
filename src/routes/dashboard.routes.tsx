import Guard from "./Guard";
import { lazyLoad } from "../utils/LazyLoad";
export const dashboardRoutes = {
  element: <Guard requireAuth={true} />,
  children: [
    {
      path: "dashboard",
      element: lazyLoad(
        () => import("../common/layout/dashboard/DashboardLayout")
      ),
      children: [
        {
          index: true,
          element: lazyLoad(() => import("../features/home/dashboard/Home")),
        },
        {
          path: "chat",
          element: (
            <Guard allowedRoles={["customer_service"]}>
              {lazyLoad(() => import("../features/chat/dashboard/Chat"))}
            </Guard>
          ),
        },
      ],
    },
  ],
};
