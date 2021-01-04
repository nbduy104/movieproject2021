import api from "api";
import * as ActionType from "./constants";
export const actShowTimeApi = () => {
  return (dispatch) => {
    dispatch(actionName(ActionType.SHOW_TIME_REQUEST));
    api
      .get("/QuanLyRap/LayThongTinHeThongRap")
      .then((res) => {
        dispatch(actionName(ActionType.SHOW_TIME_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.SHOW_TIME_FAILED, err));
      });
  };
};
export const actShowCumRapApi = (maHeThongRap) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.SHOW_CUM_RAP_REQUEST));
    api
      .get(
        `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
      )
      .then((res) => {
        dispatch(actionName(ActionType.SHOW_CUM_RAP_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.SHOW_CUM_RAP_FAILED, err));
      });
  };
};
export const actShowLichChieuHTRApi = (maHeThongRap) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.SHOW_LICH_CHIEU_REQUEST));
    api
      .get(
        `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP02`
      )
      .then((res) => {
        dispatch(actionName(ActionType.SHOW_LICH_CHIEU_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.SHOW_LICH_CHIEU_FAILED, err));
      });
  };
};
const actionName = (type, payload) => ({
  type,
  payload,
});
