import * as ActionType from "./constants";
const initialState = {
  loading: false,
  data: null,
  dataShowInfo: null,
  err: null,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.UPDATE_INFO_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.UPDATE_INFO_USER_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.data.matKhau = "";
      state.err = null;
      return { ...state };
    case ActionType.SHOW_INFO_USER_SUCCESS:
      state.loading = false;
      state.dataShowInfo = payload;
      state.err = null;
      return { ...state };
    case ActionType.UPDATE_INFO_USER_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
