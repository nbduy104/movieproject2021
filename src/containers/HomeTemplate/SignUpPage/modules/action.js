import api from "api/index";
import * as ActionType from "./constants";
import { actSignInHomeApi } from "../../SignInPage/modules/action";
export const actSignUpHomeApi = (user, history) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.SIGN_UP_HOME_REQUEST));
    api
      .post("/QuanLyNguoiDung/DangKy", user)
      .then((res) => {
        dispatch(actionName(ActionType.SIGN_UP_HOME_SUCCESS, res.data));
        let user = {
          taiKhoan: res.data.taiKhoan,
          matKhau: res.data.matKhau,
        };

        dispatch(actSignInHomeApi(user, history, 0));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.SIGN_UP_HOME_FAILED, err));
      });
  };
};
const actionName = (type, payload) => ({
  type,
  payload,
});
