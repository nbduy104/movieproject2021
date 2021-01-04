import { THEME_MODE, HIDE_NAVBAR } from "./constants";
export const actChangeTheme = () => ({
  type: THEME_MODE,
});
export const actHideNavbar = (payload) => ({
  type: HIDE_NAVBAR,
  payload,
});
