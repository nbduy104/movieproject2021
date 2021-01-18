import React, { memo } from "react";
import "./style.scss";

import Slider from "react-slick";
import slide1 from "../../Assets/Images/apps/slide1.jpg";
import slide2 from "../../Assets/Images/apps/slide2.jpg";
import slide3 from "../../Assets/Images/apps/slide3.jpg";
import slide4 from "../../Assets/Images/apps/slide4.jpg";
import slide5 from "../../Assets/Images/apps/slide5.jpg";
import mobile from "../../Assets/Images/apps/mobile.png";
function Apps() {
  const settings = {
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="apps" className="apps">
      <div className="apps__bg">
        <div className="tix__container">
          <div className="row apps__row ">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="text-white">
                <h2 className="mb-3">Ứng dụng tiện lợi dành cho</h2>
                <h2 className="mb-4">người yêu điện ảnh</h2>
                <p className="mb-4 pr-5">
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <button className="mb-2">App miễn phí - Tải về ngay!</button>
                <p className="textAppUnder">
                  TIX có hai phiên bản
                  <a
                    rel="noreferrer"
                    className="tagA"
                    target="_blank"
                    href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                  >
                    {" "}
                    iOS
                  </a>{" "}
                  &amp;&nbsp;
                  <a
                    rel="noreferrer"
                    className="tagA"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  >
                    Android
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 apps__img text-center">
              <img className="img__bg" src={mobile} alt="mobile" />
              <div className="apps__carousel">
                <Slider {...settings} className="slick__carousel">
                  <img className="img__items" src={slide1} alt="slide1" />
                  <img className="img__items" src={slide2} alt="slide2" />
                  <img className="img__items" src={slide3} alt="slide3" />
                  <img className="img__items" src={slide4} alt="slide4" />
                  <img className="img__items" src={slide5} alt="slide5" />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default memo(Apps);
