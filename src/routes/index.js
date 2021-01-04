import HomePage from "../containers/HomeTemplate/HomePage";
import InfoUserPage from "../containers/HomeTemplate/InfoUserPage";
export const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/info-user",
    component: InfoUserPage,
  },
];
