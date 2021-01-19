import * as ActionType from "./constants";
import api from "../../../api/index";
export const actListMovieNewApi = (group, page) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.LIST_MOVIE_NEW_REQUEST));
    api
      .get(
        `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${group}&soTrang=${page}&soPhanTuTrenTrang=8`
      )
      .then((res) => {
        dispatch(actionName(ActionType.LIST_MOVIE_NEW_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(actionName(ActionType.LIST_MOVIE_NEW_FAILED, err));
      });
  };
};
export const actionName = (type, payload) => ({
  type,
  payload,
});
