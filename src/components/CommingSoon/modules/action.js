import api from "../../../api/index";
import * as ActionType from "./constants";
export const actListMovieApi = (group, page, success) => {
  return (dispatch) => {
    dispatch(actionName(ActionType.LIST_MOVIE_REQUEST));
    api
      .get(
        `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${group}&soTrang=${page}&soPhanTuTrenTrang=8`
      )
      .then((res) => {
        dispatch(actionName(success, res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actionName(ActionType.LIST_MOVIE_FAILED, err));
      });
  };
};

export const actionName = (type, payload) => ({
  type,
  payload,
});
