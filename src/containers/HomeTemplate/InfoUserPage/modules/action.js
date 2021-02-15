import api from "api/index";
import * as ActionType from "./constants";
import { actSignInHomeApi } from "containers/HomeTemplate/SignInPage/modules/action";
export const actShowInfoUserApi = (user) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.UPDATE_INFO_USER_REQUEST));
    api
      .post("/QuanLyNguoiDung/ThongTinTaiKhoan", user)
      .then((res) => {
        dispatch(actionName(ActionType.SHOW_INFO_USER_SUCCESS, res.data));
        // localStorage.setItem("UserInfo", JSON.stringify(res.data));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.UPDATE_INFO_USER_FAILED, err));
      });
  };
};
export const actUpdateInfoUserApi = (user, history) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.UPDATE_INFO_USER_REQUEST));
    api
      .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
      .then((res) => {
        dispatch(actionName(ActionType.UPDATE_INFO_USER_SUCCESS, res.data));
        history.replace("/");
        let userUpdate = {
          taiKhoan: res.data.taiKhoan,
          matKhau: user.matKhau,
        };
        dispatch(actSignInHomeApi(userUpdate, history, 0));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.UPDATE_INFO_USER_FAILED, err));
      });
  };
};
export const actionName = (type, payload) => ({
  type,
  payload,
});
