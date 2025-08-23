import Guard from "./Guard";
import { lazyLoad } from "../utils/LazyLoad";

export const websiteRoutes = {
  element: lazyLoad(() => import("../common/layout/website/WebsiteLayout")),
  children: [
    {
      index: true,
      element: lazyLoad(() => import("../features/home/Home")),
    },
    {
      path: "about",
      element: lazyLoad(() => import("../features/static-pages/pages/About")),
    },
    {
      path: "faq",
      element: lazyLoad(() => import("../features/static-pages/pages/Faq")),
    },
    {
      path: "my-profile",
      element: (
        <Guard requireAuth={true}>
          {lazyLoad(() => import("../features/user-dashboard/MyProfile"))}
        </Guard>
      ),
    },
  ],
};
