import "./style.scss";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Carousel() {
  const listBannerMovie = [
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/09/rom-c18-16008300686919.png",
      trailer: "XRm1P7oGpMQ",
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/09/greenland-tham-hoa-thien-thach-16000538668854.png",

      trailer: "vz-gdEL_ae8",
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/09/ac-quy-doi-dau-deliver-us-from-evil-c16-15994546580686.jpg",
      trailer: "SoDI4vGGSFY",
    },
    {
      hinhAnh: "https://s3img.vcdn.vn/123phim/2020/08/tenet-15984144207145.png",
      trailer: "AZGcmvrTX9M",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [videoID, setVideoID] = useState("");
  const hideVideo = () => {
    setOpen(false);
  };
  const showVideo = (videoID) => {
    setVideoID(videoID);
    setOpen(true);
  };
  return (
    <section className="carouselSection">
      <div className="carousel__content">
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {listBannerMovie.map((banner, index) => (
              <div
                className={
                  index !== 0 ? "carousel-item" : "carousel-item active"
                }
                key={index}
              >
                <img src={banner.hinhAnh} alt="banner" />

                <button
                  className="js-video-button"
                  onClick={() => {
                    showVideo(banner.trailer);
                  }}
                >
                  <i className="fa fa-play" />
                </button>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev left__control"
            href="#carouselIndicators"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-chevron-left"></i>
          </a>
          <a
            className="carousel-control-next right__control"
            href="#carouselIndicators"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-chevron-right"></i>
          </a>
        </div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoID}
          onClose={hideVideo}
        />
      </div>
    </section>
  );
}
