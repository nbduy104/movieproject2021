import { combineReducers } from "redux";
import navbarHomeReducer from "../../components/NavbarHome/modules/reducer";
import listMovieReducer from "../../components/CommingSoon/modules/reducer";
import navBookingReducer from "../../components/NavbarBooking/modules/reducer";
import showTimeReducer from "../../components/ShowTime/modules/reducer";
import signUpHomeReducer from "../../containers/HomeTemplate/SignUpPage/modules/reducer";
import signInHomeReducer from "../../containers/HomeTemplate/SignInPage/modules/reducer";
import updateInfoReducer from "../../containers/HomeTemplate/InfoUserPage/modules/reducer";
import listBookingChairReducer from "../../containers/HomeTemplate/BookingPage/modules/reducer";
const rootReducer = combineReducers({
  navbarHomeReducer,
  listMovieReducer,
  navBookingReducer,
  showTimeReducer,
  signUpHomeReducer,
  signInHomeReducer,
  updateInfoReducer,
  listBookingChairReducer,
});
export default rootReducer;
