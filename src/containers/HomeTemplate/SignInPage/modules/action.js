import api from "api/index";
import * as ActionType from "./constants";
import setHeaders from "../../../../utils/setHeaders";
const TIME_EXP = 36000000;
export const actSignInHomeApi = (user, history, maLichChieu, keepLogin) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.SIGN_IN_HOME_REQUEST));
    api
      .post("/QuanLyNguoiDung/DangNhap", user)
      .then((res) => {
        dispatch(actionName(ActionType.SIGN_IN_HOME_SUCCESS, res.data));
        localStorage.setItem("User", JSON.stringify(res.data));
        setHeaders(res.data.accessToken);
        maLichChieu === 0
          ? history.replace("/")
          : history.replace(`/booking/${maLichChieu}`);
        const date = new Date().getTime();
        const exp = date + TIME_EXP;
        localStorage.setItem("TimeExpire", exp);
        keepLogin
          ? localStorage.setItem("KeepLogin", keepLogin)
          : setTimeLogout(TIME_EXP, history);
      })
      .catch((err) => {
        dispatch(actionName(ActionType.SIGN_IN_HOME_FAILED, err));
      });
  };
};
export const tryLogin = (history) => {
  return (dispatch) => {
    if (!localStorage.getItem("User")) return;
    const date = new Date().getTime();
    const exp = localStorage.getItem("TimeExpire");
    if (!exp) return;
    const user = JSON.parse(localStorage.getItem("User"));
    const keepLogin = localStorage.getItem("KeepLogin");
    if (!keepLogin) {
      exp && date > exp
        ? actLogout(history)
        : setTimeLogout(exp - date, history);
    }
    setHeaders(user.accessToken);
    dispatch(actionName(ActionType.SIGN_IN_HOME_SUCCESS, user));
  };
};
const setTimeLogout = (time, history) => {
  setTimeout(() => {
    actLogout(history);
  }, time);
};
export const actLogout = (history) => {
  localStorage.removeItem("User");
  localStorage.removeItem("UserInfo");
  localStorage.removeItem("TimeExpire");
  localStorage.removeItem("KeepLogin");
  history.replace("/");
  return (dispatch) => {
    dispatch(actionName(ActionType.SIGN_IN_HOME_CLEAR_DATA));
  };
};
const actionName = (type, payload) => ({
  type,
  payload,
});
