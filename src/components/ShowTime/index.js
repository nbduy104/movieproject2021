import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, ContainerBG } from "../Container";
import {
  actShowCumRapApi,
  actShowLichChieuHTRApi,
  actShowTimeApi,
} from "./modules/action";
import "./style.scss";
import { StyledLink } from "../Link";
import Loader from "../Loader";
import { useMediaQuery } from "react-responsive";
import Alert from "@material-ui/lab/Alert";
import { StyledLinkPage } from "components/Link/index";
import Button from "@material-ui/core/Button";

function ShowTime(props) {
  const [isShowHeThongRap, setIsShowHeThongRap] = useState("BHDStar");
  const [isShowCumRap, setIsShowCumRap] = useState("bhd-star-cineplex-bitexco");

  useEffect(() => {
    props.fetchHeThongRap();
    props.fetchCumRap("BHDStar");
    props.fetchLichChieuHTR("BHDStar");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const isSM = useMediaQuery({ query: "(max-width: 776px)" });
  const { data } = props;
  const renderHeThongRap = () => {
    if (data) {
      return data.map((htRap) => {
        return (
          <li key={htRap.maHeThongRap}>
            <a
              href="#!"
              className={
                isShowHeThongRap === htRap.maHeThongRap ? "active" : "none"
              }
              onClick={() => {
                props.fetchCumRap(htRap.maHeThongRap);
                props.fetchLichChieuHTR(htRap.maHeThongRap);
                setIsShowHeThongRap(htRap.maHeThongRap);
                switch (htRap.maHeThongRap) {
                  case "BHDStar":
                    setIsShowCumRap("bhd-star-cineplex-bitexco");
                    break;
                  case "CGV":
                    setIsShowCumRap("cgv-aeon-binh-tan");
                    break;
                  case "CineStar":
                    setIsShowCumRap("cns-hai-ba-trung");
                    break;
                  case "Galaxy":
                    setIsShowCumRap("glx-huynh-tan-phat");
                    break;
                  case "LotteCinima":
                    setIsShowCumRap("lotte-cantavil");
                    break;
                  case "MegaGS":
                    setIsShowCumRap("megags-cao-thang");
                    break;

                  default:
                    break;
                }
              }}
            >
              <img src={htRap.logo} alt="logo" />
            </a>
          </li>
        );
      });
    }
  };
  const renderCinema = (tenCumRap) => {
    let signCumRap = tenCumRap.split(" ");
    let srcImg = "";
    switch (signCumRap[0]) {
      case "BHD":
        srcImg = "/img/bhdCinema.png";
        break;
      case "CGV":
        srcImg = "/img/ddcCinema.jpg";
        break;
      case "CNS":
        srcImg = "/img/cinestarCinema.jpg";
        break;
      case "GLX":
        srcImg = "/img/glxCinema.png";
        break;
      case "Lotte":
        srcImg = "/img/lotteCinema.jpg";
        break;
      case "MegaGS":
        srcImg = "/img/megaCinema.jpg";
        break;
      default:
        break;
    }
    return <img src={process.env.PUBLIC_URL + srcImg} alt="signCumRap" />;
  };
  const renderCumRap = () => {
    const { dataCumRap } = props;
    if (dataCumRap) {
      return dataCumRap.map((cumRap, index) => {
        let tenCumRap = cumRap.tenCumRap.split("-");
        return (
          <li key={index}>
            <div
              className={
                isShowCumRap === cumRap.maCumRap
                  ? "showtheature__img active"
                  : "showtheature__img "
              }
              onClick={() => {
                setIsShowCumRap(cumRap.maCumRap);
              }}
            >
              <div
                data-toggle="collapse"
                type="button"
                href={`#${cumRap.maCumRap}`}
                className="div__showtheature__img"
              >
                <a href="#!">
                  {/* <img
                    src={`https://picsum.photos/id/${Math.floor(
                      Math.random() * 100 + 1
                    )}/200/200`}
                    alt="CumRap"
                  /> */}
                  {renderCinema(tenCumRap[0])}
                </a>
                <div className="px-1">
                  <div>
                    <span style={{ color: "green" }}>{tenCumRap[0]}</span>
                    <span>- {tenCumRap[1]}</span>
                    <p className="pinfo__theature">{cumRap.diaChi}</p>
                  </div>
                  <a href="#!" className="adetail__theature">
                    [chi tiết]
                  </a>
                </div>
              </div>
              {isSM && (
                <div
                  id={`${cumRap.maCumRap}`}
                  className={
                    isShowCumRap === cumRap.maCumRap
                      ? "collapse multi-collapse theater__movies "
                      : "collapse multi-collapse theater__movies show"
                  }
                >
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade active show"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      {renderListMovieHTR(cumRap.maCumRap)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
        );
      });
    }
  };
  const renderTimeMovie = (lichChieuTheoPhim) => {
    return lichChieuTheoPhim
      .filter(
        (lichChieu) =>
          new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() ===
          "1/1/2019"
      )
      .map((lichChieu, index) => {
        let now = new Date(lichChieu.ngayChieuGioChieu);
        now.setMinutes(now.getMinutes() + 105);
        now = new Date(now);
        const hour = new Date().getHours();
        return (
          <ContainerBG className="a__showTime" key={index}>
            <Button disabled={hour >= now.getHours() ? true : false}>
              <StyledLinkPage to={`/booking/${lichChieu.maLichChieu}`}>
                <span>
                  {new Date(lichChieu.ngayChieuGioChieu).getHours() +
                    ":" +
                    new Date(lichChieu.ngayChieuGioChieu).getMinutes()}
                </span>
                ~{now.getHours() + ":" + now.getMinutes()}
              </StyledLinkPage>
            </Button>
          </ContainerBG>
        );
      });
  };
  const renderListMovieHTRChild = () => {
    const { dataLichChieuHTR } = props;
    let flagExistFilm = false;
    if (!dataLichChieuHTR) return;
    return dataLichChieuHTR[0].lstCumRap.map((item, i) => {
      if (item.maCumRap === isShowCumRap) {
        flagExistFilm = true;
        return item.danhSachPhim.map((movie, index) => {
          let hinhAnh = movie.hinhAnh.split("http");
          let linkHinhAnh = "https" + hinhAnh[1];
          return (
            <div key={index}>
              <StyledLink data-toggle="collapse" href={`#P${movie.maPhim}`}>
                <div className="movie__info movie__info__top">
                  <div className="movie__img">
                    <img src={linkHinhAnh} alt="hinhAnh" />
                  </div>
                  <div className="movie__name">
                    <div className="d-flex">
                      <span id="greenLabel">P</span>
                      <p className="p__movie__name"> {movie.tenPhim}</p>
                    </div>
                    <p className="p__movie__time">
                      109 phút - TIX 9.4 - IMDb 8.7
                    </p>
                  </div>
                </div>
              </StyledLink>
              <div
                className="collapse movie__collapse show"
                id={`P${movie.maPhim}`}
              >
                <h1>2D Digital</h1>
                <div className="movie__show__times row">
                  {renderTimeMovie(movie.lstLichChieuTheoPhim)}
                </div>
              </div>
            </div>
          );
        });
      } else if (
        dataLichChieuHTR[0].lstCumRap.length - 1 === i &&
        !flagExistFilm
      ) {
        return (
          <Alert className="alert__movietime" severity="error" key={i}>
            Cụm Rạp này không có lịch chiếu hôm nay
          </Alert>
        );
      } else {
        return "";
      }
    });
  };
  const renderListMovieHTR = (maCumRap) => {
    if (isSM && maCumRap === isShowCumRap) {
      return renderListMovieHTRChild();
    } else if (!isSM) return renderListMovieHTRChild();
  };

  return (
    <ContainerBG id="showtimes" className="showtimes">
      <Container className="showtimes__container row">
        <div className="px-0 showtimetheature__cover ">
          <ul className="showtheature__myTab">{renderHeThongRap()}</ul>
        </div>
        {props.loading ? (
          <Loader />
        ) : (
          <div id="showtheature__myTabContent">
            <ul className="showtimes__myTab">{renderCumRap()}</ul>
          </div>
        )}
        {!isSM && !props.loading && (
          <div className="theater__movies">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active "
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                {renderListMovieHTR()}
              </div>
            </div>
          </div>
        )}
      </Container>
    </ContainerBG>
  );
}
const mapStateToProps = (state) => ({
  data: state.showTimeReducer.data,
  dataCumRap: state.showTimeReducer.dataCumRap,
  dataLichChieuHTR: state.showTimeReducer.dataLichChieuHTR,
  loading: state.showTimeReducer.loading,
  loadingNow: state.listMovieReducer.loadingNow,
});
const mapDispatchToProps = (dispatch) => ({
  fetchHeThongRap: () => {
    dispatch(actShowTimeApi());
  },
  fetchCumRap: (maHeThongRap) => {
    dispatch(actShowCumRapApi(maHeThongRap));
  },
  fetchLichChieuHTR: (maHeThongRap) => {
    dispatch(actShowLichChieuHTRApi(maHeThongRap));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowTime);
