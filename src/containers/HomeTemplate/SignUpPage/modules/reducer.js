import * as ActionType from "./constants";
const initialState = {
  loading: false,
  data: null,
  err: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SIGN_UP_HOME_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.SIGN_UP_HOME_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case ActionType.SIGN_UP_HOME_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
