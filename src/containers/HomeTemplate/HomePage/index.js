import Carousel from "components/Carousel";
import CommingSoon from "../../../components/CommingSoon";
import CommingSoonPage2 from "../../../components/CommingSoon/MovieCommingSoonPage2";
import CommingSoonPage3 from "../../../components/CommingSoon/MovieCommingSoonPage3";
import React, { Component } from "react";
import NavbarBooking from "components/NavbarBooking";
import ShowTime from "../../../components/ShowTime";
import Apps from "../../../components/Apps";
import Partners from "../../../components/Partners";
import Infomation from "components/Infomation";

export default class HomePage extends Component {
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
        <Partners />
      </>
    );
  }
}
