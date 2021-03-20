import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
export default function ShowtimeMovie() {
  // const [state, setState] = useState({
  //   listTime: [],
  // });
  const { data } = useSelector((state) => state.showTimeReducer);
  const renderHTR = () => {
    if (!data) return;
    return data.map((item, index) => (
      <div
        key={index}
        className="text-left px-5 py-3"
        onClick={handleShowTimeMovie}
      >
        <img className="logo mr-2" src={item.logo} alt="logo" />
        <span>{item.maHeThongRap}</span>
      </div>
    ));
  };
  const handleShowTimeMovie = () => {};
  const renderShowTimeMovie = () => {
    // return state.listTime.map((item) => <div>{item}</div>);
  };
  return (
    <div className="container">
      <div className="row px-5 ">
        <div className="col-4">{renderHTR()}</div>
        <div className="col-8 ">{renderShowTimeMovie()}</div>
      </div>
    </div>
  );
}
