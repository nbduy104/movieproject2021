import React, { Component } from "react";
import { LIST_MOVIE_CHANGE_PAGE } from "./modules/constants";
import "./style.scss";
import Star from "../../Assets/Images/star1.png";
import { actListMovieApi, actionName } from "./modules/action";
import { connect } from "react-redux";
import Slider from "react-slick";
import { Container, ContainerBG } from "../Container";
import Button from "../Button";
import { StyledLink } from "../Link";
import { Heading4 } from "../Heading";
import Loader from "components/Loader";
export const renderStar = (movie) => {
  if (movie.danhGia > 9) {
    return (
      <>
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
      </>
    );
  } else if (movie.danhGia > 7) {
    return (
      <>
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
      </>
    );
  } else if (movie.danhGia >= 5) {
    return (
      <>
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
      </>
    );
  }
};
export const renderListMovie = (page) => {
  if (page) {
    return page.items.map((movie) => {
      return (
        <div
          className="movieColumn col-12 col-md-6 col-lg-3"
          key={movie.maPhim}
        >
          <div
            className="img__bg"
            style={{
              background: `url(${movie.hinhAnh})center center / cover no-repeat scroll`,
            }}
          >
            <div className="movie__image">
              <div className="movie__point__label ">
                <div className="movie__point text-center">
                  <span>{movie.danhGia}</span>
                </div>
                <div className="movie__star">{renderStar(movie)}</div>
              </div>
              <div className="black__overlay">
                <button className="js-video-button" data-video-id="SoDI4vGGSFY">
                  <i className="fa fa-play" />
                </button>
              </div>
            </div>
          </div>
          <div className="movie__content">
            <div className="movie__name">
              <span id="redLabel">C18</span>
              <Heading4>{movie.tenPhim}</Heading4>
            </div>
            <div className="getTicket">
              <Button>MUA VÉ</Button>
            </div>
          </div>
        </div>
      );
    });
  }
};
export const renderPageMovie = (data, loading) => {
  if (loading) return <Loader />;
  if (data) {
    return data.map((item, index) => {
      if (item.count !== 0) {
        return (
          <div className="carousel__item" key={index}>
            <div className="moviesList">{renderListMovie(item)}</div>
          </div>
        );
      }
    });
  }
};
class MovieCommingSoonPage3 extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      arrows: false,
      autoplay: false,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <ContainerBG id="moviesSection">
        <Container className="moviesSection">
          <div className="nav-tabs">
            <StyledLink
              style={
                this.props.isShowMovie
                  ? {
                      color: "#fb4226",
                      fontSize: "24px",
                    }
                  : {}
              }
              className="mx-2"
              onClick={() => {
                this.props.fetchChangePage(true);
              }}
            >
              Đang chiếu
            </StyledLink>
            <StyledLink
              style={
                this.props.isShowMovie
                  ? {}
                  : {
                      color: "#fb4226",
                      fontSize: "24px",
                    }
              }
              className="mx-2"
              onClick={() => {
                this.props.fetchChangePage(false);
              }}
            >
              Sắp chiếu
            </StyledLink>
          </div>
          <div className="listMovie__control">
            <div
              style={
                this.props.isShowMovie
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Slider
                ref={this.props.isShowMovie ? (c) => (this.slider = c) : ""}
                {...settings}
                className="slick__carousel"
              >
                {renderPageMovie(this.props.dataNow, this.props.loading)}
              </Slider>
            </div>
            <div
              style={
                this.props.isShowMovie
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              <Slider
                ref={!this.props.isShowMovie ? (c) => (this.slider = c) : ""}
                {...settings}
                className="slick__carousel2"
              >
                {renderPageMovie(this.props.dataComming, this.props.loading)}
              </Slider>
            </div>
            <div style={{ textAlign: "center" }}>
              <StyledLink className="a__control" onClick={this.previous}>
                <i className="fa fa-angle-left left"></i>
              </StyledLink>

              <StyledLink className="a__control" onClick={this.next}>
                <i className="fa fa-angle-right right"></i>
              </StyledLink>
            </div>
          </div>
        </Container>
      </ContainerBG>
    );
  }
}
const mapStateToProps = (state) => ({
  dataNow: state.listMovieReducer.dataNow,
  dataComming: state.listMovieReducer.dataComming,
  isShowMovie: state.listMovieReducer.isShowMovie,
  loading: state.listMovieReducer.loading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchListMovie: (group, page, success) => {
    dispatch(actListMovieApi(group, page, success));
  },
  fetchChangePage: (flag) => {
    dispatch(actionName(LIST_MOVIE_CHANGE_PAGE, flag));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCommingSoonPage3);
