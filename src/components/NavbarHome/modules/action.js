import { THEME_MODE, HIDE_NAVBAR, SHOW_ALERT, HIDE_ALERT } from "./constants";
export const actChangeTheme = () => ({
  type: THEME_MODE,
});
export const actHideNavbar = (payload) => ({
  type: HIDE_NAVBAR,
  payload,
});
export const actShowAlert = (payload) => ({
  type: SHOW_ALERT,
  payload,
});
export const actHideAlert = (payload) => ({
  type: HIDE_ALERT,
  payload,
});
