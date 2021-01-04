import React, { useState } from "react";
import "./style.scss";
import { StyledLink } from "../Link";
import { Container, ContainerBG } from "../Container";
import Button from "../Button";
export default function Infomation() {
  const [watchMore, setWatchMore] = useState(0);
  return (
    <ContainerBG id="info" className="info">
      <Container className="info__content px-2">
        <ul className="nav nav-tabs d-flex" id="info__tab" role="tablist">
          <li className="nav-item" role="presentation">
            <StyledLink
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#dienAnh24h"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Điện Ảnh 24h
            </StyledLink>
          </li>
          <li className="nav-item" role="presentation">
            <StyledLink
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#reView"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Review
            </StyledLink>
          </li>
          <li className="nav-item" role="presentation">
            <StyledLink
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#khuyenMai"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Khuyến Mãi
            </StyledLink>
          </li>
        </ul>
        <div className="tab-content" id="info__myTabContent">
          <div
            className="tab-pane fade show active"
            id="dienAnh24h"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div id="dienAnh24hContent1" className="pt-2">
              <div className="info__top">
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie10.png" />
                    <h5>
                      TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </h5>
                    <p>
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie11.png" />
                    <h5>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h5>
                    <p>
                      Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                      Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                      nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                      hai người phụ nữ cùng hợp sức để vạch mặt tên tội{" "}
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie8.png" />
                        <h5>
                          Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                          Christopher Nolan
                        </h5>
                        <p>
                          Làng phim đương đại những năm qua chứng kiến sự lên
                          ngôi của cái tên Christopher Nolan, được biết tới như
                          một trong những đạo diễn thiên tài với khả năng tạo ra
                          siêu phẩm bạc tỉ chất lượng.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie9.png" />
                        <h5>
                          Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                          phòng vé' xứ Hàn
                        </h5>
                        <p>
                          Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn
                          4.68 triệu vé, hai tên tuổi lão làng trong làng điện
                          ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết
                          Tận – một bộ phim hành động siêu “nặng đô”.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms1.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                        đình đám nhất Hollywood
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms2.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms3.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                        Lắm Chiêu
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms4.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người
                        Gỗ Pinocchio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="dienAnh24hContent2"
              className="pt-2"
              style={watchMore > 0 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie3.png" />
                    <h5>
                      TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </h5>
                    <p>
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie2.png" />
                    <h5>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h5>
                    <p>
                      Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                      Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                      nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                      hai người phụ nữ cùng hợp sức để vạch mặt tên tội{" "}
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie1.png" />
                        <h5>
                          Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                          Christopher Nolan
                        </h5>
                        <p>
                          Làng phim đương đại những năm qua chứng kiến sự lên
                          ngôi của cái tên Christopher Nolan, được biết tới như
                          một trong những đạo diễn thiên tài với khả năng tạo ra
                          siêu phẩm bạc tỉ chất lượng.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie11.png" />
                        <h5>
                          Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                          phòng vé' xứ Hàn
                        </h5>
                        <p>
                          Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn
                          4.68 triệu vé, hai tên tuổi lão làng trong làng điện
                          ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết
                          Tận – một bộ phim hành động siêu “nặng đô”.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms1.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                        đình đám nhất Hollywood
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms2.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms3.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                        Lắm Chiêu
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms4.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người
                        Gỗ Pinocchio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="dienAnh24hContent3"
              className="pt-2"
              style={watchMore > 1 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie12.png" />
                    <h5>
                      TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </h5>
                    <p>
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie9.png" />
                    <h5>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h5>
                    <p>
                      Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                      Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                      nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                      hai người phụ nữ cùng hợp sức để vạch mặt tên tội{" "}
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie7.png" />
                        <h5>
                          Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                          Christopher Nolan
                        </h5>
                        <p>
                          Làng phim đương đại những năm qua chứng kiến sự lên
                          ngôi của cái tên Christopher Nolan, được biết tới như
                          một trong những đạo diễn thiên tài với khả năng tạo ra
                          siêu phẩm bạc tỉ chất lượng.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie5.png" />
                        <h5>
                          Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                          phòng vé' xứ Hàn
                        </h5>
                        <p>
                          Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn
                          4.68 triệu vé, hai tên tuổi lão làng trong làng điện
                          ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết
                          Tận – một bộ phim hành động siêu “nặng đô”.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms1.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                        đình đám nhất Hollywood
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms2.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms3.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                        Lắm Chiêu
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms4.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người
                        Gỗ Pinocchio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pb-2">
              <Button
                className="btn__readmore"
                onClick={() => {
                  setWatchMore(watchMore + 1);
                  if (watchMore === 2) setWatchMore(0);
                }}
              >
                {watchMore === 2 ? "THU GỌN" : "XEM THÊM"}
              </Button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="reView"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div id="reViewContent1" className="pt-2">
              <div className="info__top">
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie3.png" />
                    <h5>
                      TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </h5>
                    <p>
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie2.png" />
                    <h5>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h5>
                    <p>
                      Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                      Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                      nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                      hai người phụ nữ cùng hợp sức để vạch mặt tên tội{" "}
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie1.png" />
                        <h5>
                          Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                          Christopher Nolan
                        </h5>
                        <p>
                          Làng phim đương đại những năm qua chứng kiến sự lên
                          ngôi của cái tên Christopher Nolan, được biết tới như
                          một trong những đạo diễn thiên tài với khả năng tạo ra
                          siêu phẩm bạc tỉ chất lượng.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie11.png" />
                        <h5>
                          Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                          phòng vé' xứ Hàn
                        </h5>
                        <p>
                          Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn
                          4.68 triệu vé, hai tên tuổi lão làng trong làng điện
                          ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết
                          Tận – một bộ phim hành động siêu “nặng đô”.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms1.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                        đình đám nhất Hollywood
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms2.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms3.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                        Lắm Chiêu
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms4.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người
                        Gỗ Pinocchio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="reViewContent2"
              className="pt-2"
              style={watchMore > 0 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie10.png" />
                    <h5>
                      TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </h5>
                    <p>
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie11.png" />
                    <h5>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h5>
                    <p>
                      Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                      Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                      nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                      hai người phụ nữ cùng hợp sức để vạch mặt tên tội{" "}
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie8.png" />
                        <h5>
                          Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                          Christopher Nolan
                        </h5>
                        <p>
                          Làng phim đương đại những năm qua chứng kiến sự lên
                          ngôi của cái tên Christopher Nolan, được biết tới như
                          một trong những đạo diễn thiên tài với khả năng tạo ra
                          siêu phẩm bạc tỉ chất lượng.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie9.png" />
                        <h5>
                          Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                          phòng vé' xứ Hàn
                        </h5>
                        <p>
                          Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn
                          4.68 triệu vé, hai tên tuổi lão làng trong làng điện
                          ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết
                          Tận – một bộ phim hành động siêu “nặng đô”.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms1.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                        đình đám nhất Hollywood
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms2.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms3.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                        Lắm Chiêu
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms4.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người
                        Gỗ Pinocchio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="reViewContent3"
              className="pt-2"
              style={watchMore > 1 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie12.png" />
                    <h5>
                      TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </h5>
                    <p>
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie9.png" />
                    <h5>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h5>
                    <p>
                      Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                      Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                      nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                      hai người phụ nữ cùng hợp sức để vạch mặt tên tội{" "}
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie7.png" />
                        <h5>
                          Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                          Christopher Nolan
                        </h5>
                        <p>
                          Làng phim đương đại những năm qua chứng kiến sự lên
                          ngôi của cái tên Christopher Nolan, được biết tới như
                          một trong những đạo diễn thiên tài với khả năng tạo ra
                          siêu phẩm bạc tỉ chất lượng.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie5.png" />
                        <h5>
                          Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                          phòng vé' xứ Hàn
                        </h5>
                        <p>
                          Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn
                          4.68 triệu vé, hai tên tuổi lão làng trong làng điện
                          ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết
                          Tận – một bộ phim hành động siêu “nặng đô”.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms1.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                        đình đám nhất Hollywood
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms2.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms3.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                        Lắm Chiêu
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms4.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người
                        Gỗ Pinocchio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pb-2">
              <Button
                className="btn__readmore"
                onClick={() => {
                  setWatchMore(watchMore + 1);
                  if (watchMore === 2) setWatchMore(0);
                }}
              >
                {watchMore === 2 ? "THU GỌN" : "XEM THÊM"}
              </Button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="khuyenMai"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div id="khuyenMaiContent1" className="pt-2">
              <div className="info__top">
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie12.png" />
                    <h5>
                      TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </h5>
                    <p>
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie9.png" />
                    <h5>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h5>
                    <p>
                      Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                      Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                      nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                      hai người phụ nữ cùng hợp sức để vạch mặt tên tội{" "}
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie7.png" />
                        <h5>
                          Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                          Christopher Nolan
                        </h5>
                        <p>
                          Làng phim đương đại những năm qua chứng kiến sự lên
                          ngôi của cái tên Christopher Nolan, được biết tới như
                          một trong những đạo diễn thiên tài với khả năng tạo ra
                          siêu phẩm bạc tỉ chất lượng.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie5.png" />
                        <h5>
                          Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                          phòng vé' xứ Hàn
                        </h5>
                        <p>
                          Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn
                          4.68 triệu vé, hai tên tuổi lão làng trong làng điện
                          ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết
                          Tận – một bộ phim hành động siêu “nặng đô”.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms1.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                        đình đám nhất Hollywood
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms2.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms3.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                        Lắm Chiêu
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms4.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người
                        Gỗ Pinocchio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="khuyenMaiContent2"
              className="pt-2"
              style={watchMore > 0 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie10.png" />
                    <h5>
                      TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </h5>
                    <p>
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie11.png" />
                    <h5>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h5>
                    <p>
                      Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                      Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                      nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                      hai người phụ nữ cùng hợp sức để vạch mặt tên tội{" "}
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie8.png" />
                        <h5>
                          Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                          Christopher Nolan
                        </h5>
                        <p>
                          Làng phim đương đại những năm qua chứng kiến sự lên
                          ngôi của cái tên Christopher Nolan, được biết tới như
                          một trong những đạo diễn thiên tài với khả năng tạo ra
                          siêu phẩm bạc tỉ chất lượng.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie9.png" />
                        <h5>
                          Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                          phòng vé' xứ Hàn
                        </h5>
                        <p>
                          Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn
                          4.68 triệu vé, hai tên tuổi lão làng trong làng điện
                          ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết
                          Tận – một bộ phim hành động siêu “nặng đô”.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms1.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                        đình đám nhất Hollywood
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms2.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms3.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                        Lắm Chiêu
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms4.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người
                        Gỗ Pinocchio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="khuyenMaiContent3"
              className="pt-2"
              style={watchMore > 1 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie3.png" />
                    <h5>
                      TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </h5>
                    <p>
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 info__items">
                  <div>
                    <img className="img-fluid" src="./img/movie2.png" />
                    <h5>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h5>
                    <p>
                      Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                      Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                      nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                      hai người phụ nữ cùng hợp sức để vạch mặt tên tội{" "}
                    </p>
                    <div className="d-flex mb-3">
                      <div className="info__like">
                        <img src="./img/like.png" />
                        <span>1</span>
                      </div>
                      <div className="info__like">
                        <img src="./img/comment.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie1.png" />
                        <h5>
                          Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                          Christopher Nolan
                        </h5>
                        <p>
                          Làng phim đương đại những năm qua chứng kiến sự lên
                          ngôi của cái tên Christopher Nolan, được biết tới như
                          một trong những đạo diễn thiên tài với khả năng tạo ra
                          siêu phẩm bạc tỉ chất lượng.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 info__items">
                      <div>
                        <img className="img-fluid" src="./img/movie11.png" />
                        <h5>
                          Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                          phòng vé' xứ Hàn
                        </h5>
                        <p>
                          Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn
                          4.68 triệu vé, hai tên tuổi lão làng trong làng điện
                          ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết
                          Tận – một bộ phim hành động siêu “nặng đô”.
                        </p>
                        <div className="d-flex mb-3">
                          <div className="info__like">
                            <img src="./img/like.png" />
                            <span>1</span>
                          </div>
                          <div className="info__like">
                            <img src="./img/comment.png" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms1.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                        đình đám nhất Hollywood
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms2.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms3.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                        Lắm Chiêu
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-3">
                      <img
                        className="img-fluid info__img--small"
                        src="./img/ms4.png"
                      />
                    </div>
                    <div className="col-10 col-sm-9 info__text--small">
                      <span>
                        5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người
                        Gỗ Pinocchio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pb-2">
              <Button
                className="btn__readmore"
                onClick={() => {
                  setWatchMore(watchMore + 1);
                  if (watchMore === 2) setWatchMore(0);
                }}
              >
                {watchMore === 2 ? "THU GỌN" : "XEM THÊM"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </ContainerBG>
  );
}
