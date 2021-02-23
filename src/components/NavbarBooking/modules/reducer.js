import * as ActionType from "./constants";
const initialState = {
  loading: false,
  data: null,
  err: null,
  maLichChieu: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.NAV_BOOKING_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.NAV_BOOKING_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case ActionType.NAV_BOOKING_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    case ActionType.NAV_BOOKING_CHECK_ACCOUNT:
      state.maLichChieu = payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
