import DetailMoviePage from "../containers/HomeTemplate/DetailMovie/index";
import HomePage from "../containers/HomeTemplate/HomePage";
// import InfoUserPage from "../containers/HomeTemplate/InfoUserPage";
export const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  // {
  //   exact: false,
  //   path: "/info-user",
  //   component: InfoUserPage,
  // },
  {
    exact: false,
    path: "/detail-movie/:id",
    component: DetailMoviePage,
  },
];
