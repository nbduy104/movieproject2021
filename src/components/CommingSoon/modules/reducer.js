import * as ActionType from "./constants";
const initialState = {
  loading: false,
  dataNow: [],
  dataComming: [],
  err: null,
  isShowMovie: true,
};

export default (state = initialState, { type, payload }) => {
  let { dataNow, dataComming } = state;
  switch (type) {
    case ActionType.LIST_MOVIE_REQUEST:
      state.loading = true;
      state.err = null;
      return { ...state };
    case ActionType.LIST_MOVIE_SUCCESS:
      state.loading = false;
      dataNow = [...dataNow, payload];
      state.dataNow = dataNow;
      state.err = null;
      return { ...state };
    case ActionType.LIST_MOVIE_COMMING_SUCCESS:
      state.loading = false;
      dataComming = [...dataComming, payload];
      state.dataComming = dataComming;
      state.err = null;
      return { ...state };
    case ActionType.LIST_MOVIE_FAILED:
      state.loading = false;
      state.err = payload;
      return { ...state };
    case ActionType.LIST_MOVIE_CHANGE_PAGE:
      state.isShowMovie = payload;
      return { ...state };
    default:
      return state;
  }
};
