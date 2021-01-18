import api from "api/index";
import * as ActionType from "./constants";

export const actNavBookingApi = (maPhim) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.NAV_BOOKING_REQUEST));
    api(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
      .then((res) => {
        dispatch(actionName(ActionType.NAV_BOOKING_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.NAV_BOOKING_FAILED, err));
      });
  };
};
export const actCheckAccount = (payload) => ({
  type: ActionType.NAV_BOOKING_CHECK_ACCOUNT,
  payload,
});
const actionName = (type, payload) => ({
  type,
  payload,
});
