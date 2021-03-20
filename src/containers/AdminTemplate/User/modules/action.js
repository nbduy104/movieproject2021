import api from "api/index";
import * as ActionType from "./constants";
export const actGetAllUser = () => {
  return (dispatch) => {
    dispatch(actionName(ActionType.LIST_USER_REQUEST));
    api
      .get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP10`)
      .then((res) => {
        console.log(res);
        dispatch(actionName(ActionType.LIST_USER_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.LIST_USER_SUCCESS, err));
      });
  };
};
const actionName = (type, payload) => ({
  type,
  payload,
});
