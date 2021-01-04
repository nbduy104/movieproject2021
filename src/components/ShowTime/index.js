import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container, ContainerBG } from "../Container";
import {
  actShowCumRapApi,
  actShowLichChieuHTRApi,
  actShowTimeApi,
} from "./modules/action";
import "./style.scss";
import { StyledLink } from "../Link";
import Loader from "../Loader";
function ShowTime(props) {
  const [isShowHeThongRap, setIsShowHeThongRap] = useState("BHDStar");
  const [isShowCumRap, setIsShowCumRap] = useState("bhd-star-cineplex-bitexco");
  useEffect(() => {
    props.fetchHeThongRap();
    props.fetchCumRap("BHDStar");
    props.fetchLichChieuHTR("BHDStar");
  }, []);
  const { data } = props;
  const renderHeThongRap = () => {
    if (data) {
      return data.map((htRap) => {
        return (
          <li key={htRap.maHeThongRap}>
            <a
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
              <img src={htRap.logo} />
            </a>
          </li>
        );
      });
    }
  };
  const renderCumRap = () => {
    const { dataCumRap } = props;
    if (dataCumRap) {
      return dataCumRap.map((cumRap, index) => {
        return (
          <li key={index}>
            <div
              className={
                isShowCumRap === cumRap.maCumRap
                  ? "showtheature__img active"
                  : "showtheature__img"
              }
              onClick={() => {
                setIsShowCumRap(cumRap.maCumRap);
              }}
            >
              <a>
                <img
                  src={`https://picsum.photos/id/${Math.floor(
                    Math.random() * 100 + 1
                  )}/200/200`}
                />
              </a>
              <div className="px-1">
                <a>
                  <p className="pname__theature ">{cumRap.tenCumRap}</p>
                  <p className="pinfo__theature">{cumRap.diaChi}</p>
                </a>
                <a className="adetail__theature">[chi tiết]</a>
              </div>
            </div>
          </li>
        );
      });
    }
  };
  const renderTimeMovie = (lichChieuTheoPhim) => {
    return lichChieuTheoPhim.map((lichChieu, index) => {
      if (
        new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() ===
        "1/1/2019"
      ) {
        let now = new Date(lichChieu.ngayChieuGioChieu);
        now.setMinutes(now.getMinutes() + 105);
        now = new Date(now);
        return (
          <ContainerBG className="a__showTime" key={index}>
            <p>
              <span>
                {new Date(lichChieu.ngayChieuGioChieu).getHours() +
                  ":" +
                  new Date(lichChieu.ngayChieuGioChieu).getMinutes()}
              </span>
              ~{now.getHours() + ":" + now.getMinutes()}
            </p>
          </ContainerBG>
        );
      }
    });
  };
  const renderListMovieHTR = () => {
    const { dataLichChieuHTR } = props;
    if (dataLichChieuHTR) {
      return dataLichChieuHTR[0].lstCumRap.map((item) => {
        if (item.maCumRap === isShowCumRap) {
          return item.danhSachPhim.map((movie, index) => {
            return (
              <div key={index}>
                <StyledLink data-toggle="collapse" href={`#P${movie.maPhim}`}>
                  <div className="movie__info movie__info__top">
                    <div className="movie__img">
                      <img src={movie.hinhAnh} />
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
        }
      });
    }
  };
  return (
    <ContainerBG id="showtimes" className="showtimes">
      <Container className="showtimes__container row">
        {/* <div className="col-sm-5 d-flex pl-0 mr-0 tix__content__col"> */}
        <div className="px-0 showtimetheature__cover">
          <ul className="showtheature__myTab">{renderHeThongRap()}</ul>
        </div>
        {props.loading ? (
          <Loader />
        ) : (
          <div className="p-0">
            <div id="showtheature__myTabContent">
              <ul className="showtimes__myTab">{renderCumRap()}</ul>
            </div>
          </div>
        )}

        <div className="theater__movies d-flex">
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
      </Container>
    </ContainerBG>
  );
}
const mapStateToProps = (state) => ({
  data: state.showTimeReducer.data,
  dataCumRap: state.showTimeReducer.dataCumRap,
  dataLichChieuHTR: state.showTimeReducer.dataLichChieuHTR,
  loading: state.showTimeReducer.loading,
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
