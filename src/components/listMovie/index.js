import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { actListMovieNewApi } from "./modules/action";
import Star from "../../Assets/Images/star1.png";
import { Heading4 } from "../Heading";
import Loader from "components/Loader";
import Button from "../Button";
import { Container, ContainerBG } from "../Container";
import { StyledLink } from "../Link";
import "./style.scss";
function ListMovieNew(props) {
  useEffect(() => {
    props.fetchListMovie("GP02", 1);
  }, []);
  const renderStar = (movie) => {
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
  const renderListMovie = (page) => {
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
                  <button
                    className="js-video-button"
                    data-video-id="SoDI4vGGSFY"
                  >
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
  const renderPageMovie = (data, loading) => {
    if (loading || !data) return <Loader />;
    // if (data) {
    //   return data.map((item, index) => {
    //     if (item.count !== 0) {
    //       return (
    //         <div className="carousel__item" key={index}>
    //           <div className="moviesList">{renderListMovie(item)}</div>
    //         </div>
    //       );
    //     }
    //   });
    // }
    return (
      <div className="carousel__item">
        <div className="moviesList">{renderListMovie(data)}</div>
      </div>
    );
  };
  const ref = useRef({});

  const next = () => {
    // ref.current.slickNext();
    if (props.data.currentPage < props.data.totalPages) {
      props.fetchListMovie("GP02", props.data.currentPage + 1);
    } else {
      props.fetchListMovie("GP02", 1);
    }
  };

  const previous = () => {
    if (props.data.currentPage === 1) {
      props.fetchListMovie("GP02", props.data.totalPages);
    } else {
      props.fetchListMovie("GP02", props.data.currentPage - 1);
    }

    ref.current.slickPrev();
  };
  const settings = {
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(props.data);
  return (
    <ContainerBG id="moviesSection">
      <Container className="moviesSection">
        <div className="listMovie__control">
          <div
          //   style={
          //     this.props.isShowMovie
          //       ? { display: "block" }
          //       : { display: "none" }
          //   }
          >
            <Slider ref={ref} {...settings} className="slick__carousel">
              {renderPageMovie(props.data, props.loading)}
            </Slider>
          </div>
          <div style={{ textAlign: "center" }}>
            <StyledLink className="a__control" onClick={previous}>
              <i className="fa fa-angle-left left"></i>
            </StyledLink>

            <StyledLink className="a__control" onClick={next}>
              <i className="fa fa-angle-right right"></i>
            </StyledLink>
          </div>
        </div>
      </Container>
    </ContainerBG>
  );
}
const mapStateToProps = (state) => ({
  data: state.listMovieNewReducer.data,
  loading: state.listMovieNewReducer.loading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchListMovie: (group, page) => {
    dispatch(actListMovieNewApi(group, page));
  },
  //   fetchChangePage: (flag) => {
  //     dispatch(actionName(LIST_MOVIE_CHANGE_PAGE, flag));
  //   },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListMovieNew);
