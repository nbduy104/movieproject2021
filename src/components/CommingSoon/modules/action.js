import api from "../../../api/index";
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

export const actionName = (type, payload) => ({
  type,
  payload,
});
