import * as ActionType from "./constants";
const initialState = {
  loading: false,
  err: null,
  data: null,
};
const adminUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.LIST_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.LIST_USER_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case ActionType.LIST_USER_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    default:
      return state;
  }
};
export default adminUserReducer;
