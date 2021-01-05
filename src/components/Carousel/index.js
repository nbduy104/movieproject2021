import React, { Component } from "react";
import "./style.scss";
export default class Carousel extends Component {
  listBannerMovie = [
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/09/rom-c18-16008300686919.png",
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/09/greenland-tham-hoa-thien-thach-16000538668854.png",
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/09/ac-quy-doi-dau-deliver-us-from-evil-c16-15994546580686.jpg",
    },
  ];

  render() {
    return (
      <section className="carouselSection">
        <div className="carousel__content">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16011908558560.jpg" />
                <button className="js-video-button" data-video-id="XRm1P7oGpMQ">
                  <i className="fa fa-play" style={{ color: "white" }} />
                </button>
              </div>
              {this.listBannerMovie.map((banner, index) => (
                <div className="carousel-item" key={index}>
                  <img src={banner.hinhAnh} loading="lazy" />
                  <button
                    className="js-video-button"
                    data-video-id="XRm1P7oGpMQ"
                  >
                    <i className="fa fa-play" style={{ color: "white" }} />
                  </button>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev left__control"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-chevron-left"></i>
            </a>
            <a
              className="carousel-control-next right__control"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
