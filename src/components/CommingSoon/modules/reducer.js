import * as ActionType from "./constants";
const initialState = {
  loadingNow: false,
  loadingComming: false,
  dataNow: [],
  dataComming: [],
  errNow: null,
  errComming: null,
  isShowMovie: true,
};

const listMovieReducer = (state = initialState, { type, payload }) => {
  let { dataNow, dataComming } = state;
  switch (type) {
    case ActionType.LIST_MOVIE_REQUEST:
      state.loadingNow = true;
      state.errNow = null;
      return { ...state };
    case ActionType.LIST_MOVIE_SUCCESS:
      state.loadingNow = false;
      dataNow = [...dataNow, payload];
      state.dataNow = dataNow;
      state.errNow = null;
      return { ...state };
    case ActionType.LIST_MOVIE_FAILED:
      state.loadingNow = false;
      state.errNow = payload;
      return { ...state };
    case ActionType.LIST_MOVIE_COMMING_REQUEST:
      state.loadingComming = true;
      state.errComming = null;
      return { ...state };
    case ActionType.LIST_MOVIE_COMMING_SUCCESS:
      state.loadingComming = false;
      dataComming = [...dataComming, payload];
      state.dataComming = dataComming;
      state.errComming = null;
      return { ...state };
    case ActionType.LIST_MOVIE_COMMING_FAILED:
      state.loadingComming = false;
      state.errComming = payload;
      return { ...state };
    case ActionType.LIST_MOVIE_CHANGE_PAGE:
      state.isShowMovie = payload;
      return { ...state };
    default:
      return state;
  }
};
export default listMovieReducer;
