import HomePage from "../containers/HomeTemplate/HomePage";
import InfoUserPage from "../containers/HomeTemplate/InfoUserPage";
import DetailMoviePage from "../components/DetailMovie/index";
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
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMoviePage,
  },
];
