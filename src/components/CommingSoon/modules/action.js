import api from "../../../api/index";
import * as ActionType from "./constants";
export const actListMovieApi = (group, page, request, success, failed) => {
  return (dispatch) => {
    dispatch(actionName(request));
    api
      .get(
        `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${group}&soTrang=${page}&soPhanTuTrenTrang=8`
      )
      .then((res) => {
        dispatch(actionName(success, res.data));
      })
      .catch((err) => {
        dispatch(actionName(failed, err));
      });
  };
};
//Fetch list lich chieu draft
export const actListShowTimeDraft = (maPhim, history) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.LIST_SHOWTIME_DRAFT_REQUEST));
    api
      .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
      .then((res) => {
        history.push(
          `/booking/${res.data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0].maLichChieu}`
        );
        dispatch(actionName(ActionType.LIST_SHOWTIME_DRAFT_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.LIST_SHOWTIME_DRAFT_FAILED, err));
      });
  };
};

export const actionName = (type, payload) => ({
  type,
  payload,
});
