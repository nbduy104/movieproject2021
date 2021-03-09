import Carousel from "components/Carousel";
import CommingSoon from "../../../components/CommingSoon";
import CommingSoonPage2 from "../../../components/CommingSoon/MovieCommingSoonPage2";
import CommingSoonPage3 from "../../../components/CommingSoon/MovieCommingSoonPage3";
import React, { Component } from "react";
import NavbarBooking from "components/NavbarBooking";
import ShowTime from "../../../components/ShowTime";
import Apps from "../../../components/Apps";

import Infomation from "components/Infomation";
import { connect } from "react-redux";
class HomePage extends Component {
  render() {
    return (
      <>
        <Carousel />
        <NavbarBooking />
        <CommingSoon />
        <CommingSoonPage2 />
        <CommingSoonPage3 />
        <ShowTime />
        <Infomation />
        <Apps />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  loadingNow: state.listMovieReducer.loadingNow,
});
export default connect(mapStateToProps)(HomePage);
