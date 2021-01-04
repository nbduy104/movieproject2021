import api from "api/index";
import * as ActionType from "./constants";
export const actListBookingChair = (maLichChieu) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.LIST_BOOKING_CHAIR_REQUEST));
    api
      .get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
      .then((res) => {
        dispatch(actionName(ActionType.LIST_BOOKING_CHAIR_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.LIST_BOOKING_CHAIR_SUCCESS, err));
      });
  };
};
export const actBookingTicket = (ticket) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.BOOKING_TICKET_REQUEST));
    api
      .post("/QuanLyDatVe/DatVe", ticket)
      .then((res) => {
        dispatch(actionName(ActionType.BOOKING_TICKET_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.BOOKING_TICKET_FAILED, err));
      });
  };
};
const actionName = (type, payload) => ({
  type,
  payload,
});
