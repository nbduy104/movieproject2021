import React, { Component } from "react";
import { Container, ContainerNav, ContainerBG } from "../Container";
import Button from "../Button";
import "./style.scss";
import { connect } from "react-redux";
import { actNavBookingApi, actCheckAccount } from "./modules/action";
import { MenuItem, FormControl } from "@material-ui/core";
import Select from "../Select";
import { StyledLinkPage } from "../Link";
class NavbarBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowPhim: false,
      isShowRap: false,
      isShowNgay: false,
      isShowSuat: false,
      maPhim: "",
      maCumRap: "",
      ngayChieu: "",
      suatChieu: "",
      dataNgayChieu: [],
      dataSuatChieu: [],
      // maLichChieu: 0,
    };
  }

  handleChange = (e, typeChange) => {
    switch (typeChange) {
      case "showPhim":
        if (e.target.value !== "") {
          this.props.fetchBooking(e.target.value);
          this.setState({
            isShowPhim: true,
            isShowRap: false,
            isShowNgay: false,
            isShowSuat: false,
            maPhim: e.target.value,
          });
        }
        break;
      case "showRap":
        if (e.target.value !== "") {
          this.setState({
            isShowRap: true,
            isShowNgay: false,
            isShowSuat: false,
            maCumRap: e.target.value,
            ngayChieu: "",
          });
        }
        break;
      case "showNgay":
        if (e.target.value !== "") {
          this.setState({
            isShowNgay: true,
            isShowSuat: false,
            ngayChieu: e.target.value,
          });
        }
        break;
      case "showSuat":
        if (e.target.value !== "") {
          this.setState({
            isShowSuat: true,
            suatChieu: e.target.value,
          });
        }
        break;
      default:
        break;
    }
  };
  renderCumRap = () => {
    const { data } = this.props;
    if (data) {
      return data.heThongRapChieu.map((item) => {
        return item.cumRapChieu.map((rapChieu, index) => (
          <MenuItem key={index} value={rapChieu.maCumRap}>
            {rapChieu.tenCumRap}
          </MenuItem>
        ));
      });
    }
  };
  handleShowNgay = () => {
    const { data } = this.props;
    let dataNgayChieu = [];
    if (data) {
      data.heThongRapChieu.map((item) => {
        return item.cumRapChieu.map((rapChieu) => {
          if (rapChieu.maCumRap === this.state.maCumRap) {
            return rapChieu.lichChieuPhim.map((movie) => {
              dataNgayChieu = [
                ...dataNgayChieu,
                new Date(movie.ngayChieuGioChieu).toLocaleDateString(),
              ];
              return dataNgayChieu;
            });
          } else {
            return "";
          }
        });
      });
    }
    dataNgayChieu = [...new Set(dataNgayChieu)];
    this.setState({
      dataNgayChieu,
    });
  };
  renderNgayChieu = () => {
    const { dataNgayChieu } = this.state;
    return dataNgayChieu.map((ngayChieu, index) => {
      return (
        <MenuItem key={index} value={ngayChieu}>
          {ngayChieu}
        </MenuItem>
      );
    });
  };
  handleSuatChieu = () => {
    const { data } = this.props;
    const { dataNgayChieu } = this.state;
    let dataSuatChieu = [];
    let dataNgayGioChieu = [];
    let dataSuatChieuTheoNgay = [];
    if (!data) return;
    data.heThongRapChieu.map((item) => {
      return item.cumRapChieu.map((rapChieu) => {
        if (rapChieu.maCumRap === this.state.maCumRap) {
          return rapChieu.lichChieuPhim.map((movie) => {
            dataNgayGioChieu = [...dataNgayGioChieu, movie.ngayChieuGioChieu];
            return dataNgayGioChieu;
          });
        } else {
          return "";
        }
      });
    });
    for (let i = 0; i < dataNgayChieu.length; i++) {
      dataNgayGioChieu.map((lichChieu) => {
        if (dataNgayChieu[i] === new Date(lichChieu).toLocaleDateString()) {
          dataSuatChieuTheoNgay = [
            ...dataSuatChieuTheoNgay,
            new Date(lichChieu).toLocaleTimeString(),
          ];
        }
        return dataSuatChieuTheoNgay;
      });
      dataSuatChieuTheoNgay = [...new Set(dataSuatChieuTheoNgay)];
      dataSuatChieu = [
        ...dataSuatChieu,
        { ngayChieu: dataNgayChieu[i], suatChieu: dataSuatChieuTheoNgay },
      ];
    }

    this.setState({
      dataSuatChieu,
    });
  };
  renderSuatChieu = () => {
    const { dataSuatChieu, ngayChieu } = this.state;
    return dataSuatChieu.map((dateShow) => {
      if (ngayChieu === dateShow.ngayChieu) {
        return dateShow.suatChieu.map((suatChieu, index) => {
          return (
            <MenuItem key={index} value={suatChieu}>
              {suatChieu}
            </MenuItem>
          );
        });
      } else {
        return "";
      }
    });
  };
  handleBookingMovie = () => {
    const { data } = this.props;
    let dataFind = [];
    if (data) {
      data.heThongRapChieu.map((item) => {
        return item.cumRapChieu.map((rapChieu) => {
          if (
            rapChieu.maCumRap === this.state.maCumRap &&
            this.state.ngayChieu &&
            this.state.suatChieu
          ) {
            dataFind = rapChieu.lichChieuPhim.filter(
              (movie) =>
                new Date(movie.ngayChieuGioChieu).toLocaleDateString() ===
                  this.state.ngayChieu &&
                new Date(movie.ngayChieuGioChieu).toLocaleTimeString() ===
                  this.state.suatChieu
            );
            if (dataFind[0]) {
              this.props.handleMalichChieu(dataFind[0].maLichChieu);
            }
          }
          return "";
        });
      });
    }
  };
  render() {
    return (
      <ContainerBG className="comingSoon">
        <Container className="comingSoon__content">
          <ContainerNav className="bookTicket row ">
            <FormControl className="col-4 bookTicket__col chooseMovie">
              {!this.state.isShowPhim ? (
                <p className="label__tenPhim">Phim</p>
              ) : (
                ""
              )}
              <Select
                MenuProps={{
                  disableScrollLock: true,
                }}
                className="selMovie"
                value={this.state.maPhim}
                onChange={(e) => {
                  this.handleChange(e, "showPhim");
                }}
              >
                {this.props.dataNow.map((item) => {
                  return item.items.map((movie) => (
                    <MenuItem key={movie.maPhim} value={movie.maPhim}>
                      {movie.tenPhim}
                    </MenuItem>
                  ));
                })}
              </Select>
            </FormControl>

            <FormControl className="col-2 bookTicket__col chooseMovie">
              {!this.state.isShowRap ? (
                <p className="label__tenPhim">Rạp</p>
              ) : (
                ""
              )}
              <Select
                MenuProps={{
                  disableScrollLock: true,
                }}
                className="selMovie"
                value={this.state.maCumRap}
                onChange={(e) => {
                  this.handleChange(e, "showRap");
                }}
                onBlur={this.handleShowNgay}
              >
                {this.state.isShowPhim ? (
                  this.renderCumRap()
                ) : (
                  <MenuItem disabled>Vui lòng chọn Phim</MenuItem>
                )}
              </Select>
            </FormControl>
            <FormControl className="col-2 bookTicket__col chooseMovie">
              {!this.state.isShowNgay ? (
                <p className="label__tenPhim">Ngày xem</p>
              ) : (
                ""
              )}
              <Select
                MenuProps={{
                  disableScrollLock: true,
                }}
                className="selMovie"
                value={this.state.ngayChieu}
                onChange={(e) => {
                  this.handleChange(e, "showNgay");
                }}
                onBlur={this.handleSuatChieu}
              >
                {this.state.isShowRap ? (
                  this.renderNgayChieu()
                ) : (
                  <MenuItem disabled>Vui lòng chọn Phim và Rạp</MenuItem>
                )}
              </Select>
            </FormControl>
            <FormControl className="col-2 bookTicket__col chooseMovie">
              {!this.state.isShowSuat ? (
                <p className="label__tenPhim">Suất chiếu</p>
              ) : (
                ""
              )}
              <Select
                MenuProps={{
                  disableScrollLock: true,
                }}
                className="selMovie"
                value={this.state.suatChieu}
                onChange={(e) => {
                  this.handleChange(e, "showSuat");
                }}
                onBlur={this.handleBookingMovie}
              >
                {this.state.isShowNgay ? (
                  this.renderSuatChieu()
                ) : (
                  <MenuItem disabled>
                    Vui lòng chọn Phim, Rạp và Ngày chiếu
                  </MenuItem>
                )}
              </Select>
            </FormControl>
            <div className="col-2 bookTicket__button text-center">
              <Button
                className="btn__BuyTicket"
                disabled={!this.state.isShowSuat ? true : false}
              >
                {localStorage.getItem("User") ? (
                  <StyledLinkPage to={`/booking/${this.props.maLichChieu}`}>
                    MUA VÉ NGAY
                  </StyledLinkPage>
                ) : (
                  <StyledLinkPage to="/sign-in"> MUA VÉ NGAY</StyledLinkPage>
                )}
              </Button>
            </div>
          </ContainerNav>
        </Container>
      </ContainerBG>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.navBookingReducer.data,
  dataNow: state.listMovieReducer.dataNow,
  maLichChieu: state.navBookingReducer.maLichChieu,
});
const mapDispatchToprops = (dispatch) => ({
  fetchBooking: (maPhim) => {
    dispatch(actNavBookingApi(maPhim));
  },
  handleMalichChieu: (maLichChieu) => {
    dispatch(actCheckAccount(maLichChieu));
  },
});
export default connect(mapStateToProps, mapDispatchToprops)(NavbarBooking);
