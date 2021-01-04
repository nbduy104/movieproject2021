import api from "api/index";
import * as ActionType from "./constants";

export const actSignUpHomeApi = (user) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.SIGN_UP_HOME_REQUEST));
    api
      .post("/QuanLyNguoiDung/DangKy", user)
      .then((res) => {
        dispatch(actionName(ActionType.SIGN_UP_HOME_SUCCESS, res.data));
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
