import * as ActionType from "./constants";
const initialState = {
  loading: false,
  err: null,
  data: null,
  loadingBookingTicket: false,
  errBookingTicket: null,
  dataBookingTicket: null,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.LIST_BOOKING_CHAIR_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.LIST_BOOKING_CHAIR_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case ActionType.LIST_BOOKING_CHAIR_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    case ActionType.BOOKING_TICKET_REQUEST:
      state.loadingBookingTicket = true;
      state.dataBookingTicket = null;
      state.errBookingTicket = null;
      return { ...state };
    case ActionType.BOOKING_TICKET_SUCCESS:
      state.loadingBookingTicket = false;
      state.dataBookingTicket = payload;
      state.errBookingTicket = null;
      return { ...state };
    case ActionType.BOOKING_TICKET_FAILED:
      state.loadingBookingTicket = false;
      state.dataBookingTicket = null;
      state.errBookingTicket = payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
