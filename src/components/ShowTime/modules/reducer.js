import * as ActionType from "./constants";
const initialState = {
  loading: false,
  data: null,
  dataCumRap: null,
  dataLichChieuHTR: null,
  err: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SHOW_TIME_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.SHOW_TIME_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case ActionType.SHOW_TIME_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    case ActionType.SHOW_CUM_RAP_REQUEST:
      state.loading = true;
      state.dataCumRap = null;
      state.err = null;
      return { ...state };
    case ActionType.SHOW_CUM_RAP_SUCCESS:
      state.loading = false;
      state.dataCumRap = payload;
      state.err = null;
      return { ...state };
    case ActionType.SHOW_CUM_RAP_FAILED:
      state.loading = false;
      state.dataCumRap = null;
      state.err = payload;
      return { ...state };
    case ActionType.SHOW_LICH_CHIEU_REQUEST:
      state.loading = true;
      state.dataLichChieuHTR = null;
      state.err = null;
      return { ...state };
    case ActionType.SHOW_LICH_CHIEU_SUCCESS:
      state.loading = false;
      state.dataLichChieuHTR = payload;
      state.err = null;
      return { ...state };
    case ActionType.SHOW_LICH_CHIEU_FAILED:
      state.loading = false;
      state.dataLichChieuHTR = null;
      state.err = payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
