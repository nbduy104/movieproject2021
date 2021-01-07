import { DarkTheme } from "Themes/DarkTheme";
import { LightTheme } from "Themes/LightTheme";
import { THEME_MODE, HIDE_NAVBAR, SHOW_ALERT, HIDE_ALERT } from "./constants";
const initialState = {
  themeMode: DarkTheme,
  isHidden: false,
  isShowAlert: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case THEME_MODE:
      if (state.themeMode === DarkTheme) {
        state.themeMode = LightTheme;
        return { ...state };
      }
      state.themeMode = DarkTheme;
      return { ...state };
    case HIDE_NAVBAR:
      state.isHidden = payload;
      return { ...state };
    case SHOW_ALERT:
      state.isShowAlert = payload;
      return { ...state };
    case HIDE_ALERT:
      state.isShowAlert = payload;
      return { ...state };
    // case THEME_MODE:
    // switch (payload) {
    //   case "DarkMode":
    //     console.log("DarkMode");
    //     state.themeMode = DarkTheme;
    //     return { ...state };
    //     break;
    //   case "LightMode":
    //     console.log("LightMode");
    //     state.themeMode = LightTheme;
    //     return { ...state };
    //     break;
    //   default:
    //     break;
    // }
    // return { ...state };

    default:
      return state;
  }
};
