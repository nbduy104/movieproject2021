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
const actionName = (type, payload) => ({
  type,
  payload,
});
