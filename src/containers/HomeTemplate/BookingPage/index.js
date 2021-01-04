import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../../style/Booking/index";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/web-logo.png";
import { connect } from "react-redux";
import Button from "../../../components/Button";
import { DarkTheme } from "Themes/DarkTheme";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";
import { actChangeTheme } from "components/NavbarHome/modules/action";
import Popovers from "components/Popovers/index";
import clsx from "clsx";
import screen from "../../../Assets/Images/screen.png";
import { GridNav, GridSide, GridBG } from "../../../components/Grid";
import "./index.scss";
import { actListBookingChair, actBookingTicket } from "./modules/action.js";
import { CssTextField } from "../../../style/SignUp";
import { TextFieldM } from "../../../components/TextField";
function BookingPage(props) {
  const [state, setstate] = useState({
    isSetPage: false,
    listBookingChair: [],
    listNumberChair: [],
    maLichChieu: 0,
    sumMoney: 0,
  });
  useEffect(() => {
    let pathArray = window.location.pathname.split("/");
    let arr = pathArray.filter((item) => isNumber(item));
    if (arr.length > 0) {
      props.fetchListBookingChair(parseInt(arr[0]));
      setstate({
        ...state,
        maLichChieu: parseInt(arr[0]),
      });
    }
  }, []);

  const isNumber = (n) => {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  };
  const handleNumberChair = (word, number) => {
    let tenGhe = 0;
    switch (word) {
      case "A":
        tenGhe = number;
        break;
      case "B":
        tenGhe = number + 16;
        break;
      case "C":
        tenGhe = number + 32;
        break;
      case "D":
        tenGhe = number + 48;
        break;
      case "E":
        tenGhe = number + 64;
        break;
      case "F":
        tenGhe = number + 80;
        break;
      case "G":
        tenGhe = number + 96;
        break;
      case "H":
        tenGhe = number + 112;
        break;
      case "I":
        tenGhe = number + 128;
        break;
      case "J":
        tenGhe = number + 144;
        break;
      default:
        break;
    }
    return tenGhe;
  };
  const getInfoChair = (word, number) => {
    if (!props.data) return;
    const { danhSachGhe } = props.data;
    let tenGhe = handleNumberChair(word, number);
    tenGhe = tenGhe < 10 ? "0" + tenGhe : tenGhe.toString();
    return danhSachGhe.find((item) => {
      return item.tenGhe === tenGhe;
    });
  };
  const hanldeChooseChair = (word, number) => {
    let flag = false;
    let { listBookingChair, listNumberChair, sumMoney } = state;
    // let tenGhe = handleNumberChair(word, number);
    let chairInfo = getInfoChair(word, number);
    if (!chairInfo || chairInfo.daDat === true) return;
    listBookingChair.map((item, index) => {
      if (item.maGhe === chairInfo.maGhe) {
        sumMoney -= chairInfo.giaVe;
        listBookingChair.splice(index, 1);
        listNumberChair.splice(index, 1);
        flag = true;
        return;
      }
    });
    if (!flag) {
      listBookingChair.push({ maGhe: chairInfo.maGhe, giaVe: chairInfo.giaVe });
      listNumberChair.push(word + number);
      sumMoney += chairInfo.giaVe;
    }
    setstate({
      ...state,
      listBookingChair,
      listNumberChair,
      sumMoney,
    });
  };
  const classes = useStyles();
  const handleClassName = (word, number) => {
    let chairInfo = getInfoChair(word, number);
    let classChair = `seat ${word + number} `;
    if (!chairInfo) return;
    if (chairInfo.loaiGhe === "Vip") classChair += "Vip ";
    if (chairInfo.daDat) return classChair + "Chose";
    if (state.listNumberChair.includes(word + number)) {
      return classChair + "active";
    }
    return classChair;
  };
  const renderMovieChair = (number) => {
    return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
      (word, index) => {
        return (
          <div
            className={handleClassName(word, number)}
            key={index}
            onClick={() => {
              hanldeChooseChair(word, number);
            }}
          >
            <span
              style={
                state.listNumberChair.includes(word + number)
                  ? { display: "block", textAlign: "center", color: "white" }
                  : { display: "none" }
              }
            >
              {number < 10 ? word + "0" + number : word + number}
            </span>
          </div>
        );
      }
    );
  };
  const renderRowMovieChair = (number) => {
    let listNumber = [number];
    for (let i = 1; i < 8; i++) {
      listNumber.push(number + i);
    }
    return listNumber.map((number) => {
      if (number < 9) {
        return (
          <div key={number} className={`cinema-row row-${number}`}>
            {renderMovieChair(number)}
          </div>
        );
      }
      return (
        <div key={number} className={`cinema-row row-${number - 8}`}>
          {renderMovieChair(number)}
        </div>
      );
    });
  };
  const renderThongTinRap = () => {
    if (!props.data) return;
    const { thongTinPhim } = props.data;
    return (
      <>
        <img src={thongTinPhim.hinhAnh} alt={thongTinPhim.tenPhim} />
        <div>
          <span>{thongTinPhim.tenCumRap}</span>
          <span>{` - ${thongTinPhim.tenRap}`}</span>
          <p>{thongTinPhim.diaChi}</p>
        </div>
      </>
    );
  };
  const renderLableChair = () => {
    return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
      (word, index) => (
        <div key={index} className="cinema-row__label">
          {word}
        </div>
      )
    );
  };
  const handleBooking = () => {
    if (!state || !props.dataUser) return;
    let ticket = {
      maLichCHieu: state.maLichChieu,
      danhSachVe: state.listBookingChair,
      taiKhoanNguoiDung: props.dataUser.taiKhoan,
    };
    console.log(ticket);
    props.handleBookingTicket(ticket);
  };
  const renderTenPhim = () => {
    const { data } = props;
    if (!data) return;
    return (
      <div className={classes.div__tenPhim}>
        <span className={classes.span__label}>C18</span>
        <span> {data.thongTinPhim.tenPhim}</span>
        <br />
        <span>{data.thongTinPhim.tenCumRap}</span>
        <span>{` - ${data.thongTinPhim.tenRap}`}</span>
      </div>
    );
  };
  return (
    <GridNav container>
      <Grid item xs={9}>
        <Grid item xs={12} container>
          <Grid item xs={2}>
            <Link exact="true" to="/">
              <img className={classes.logo} src={Logo} alt="logo" />
            </Link>
          </Grid>
          <Grid item xs={8} container>
            <Grid item xs={2}></Grid>

            <Grid
              item
              xs={4}
              className={
                state.isSetPage
                  ? classes.navContent
                  : clsx(classes.active, classes.navContent)
              }
            >
              <span>
                <span className={classes.spanNumber}>01</span>
                CHỌN GHẾ & THANH TOÁN
              </span>
            </Grid>
            <Grid item xs={4} className={classes.navContent}>
              <span>
                <span className={classes.spanNumber}>02</span>
                KẾT QUẢ ĐẶT VÉ
              </span>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid item xs={2} className={classes.avatar}>
            <Popovers />
            <Button
              className={classes.themeMode}
              onClick={() => {
                props.fetchChangeTheme();
              }}
            >
              {props.themeMode === DarkTheme ? (
                <BrightnessMediumIcon />
              ) : (
                <BrightnessHighIcon />
              )}
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <GridSide item xs={1}></GridSide>
          <GridBG item xs={11} container style={{ position: "relative" }}>
            <Grid item xs={6} className={classes.infoTheater}>
              {renderThongTinRap()}
            </Grid>
            <Grid item xs={6} style={{ textAlign: "end" }}>
              Thời gian giữ ghế
            </Grid>
            <Grid item xs={12} style={{ position: "relative", height: 500 }}>
              <img src={screen} className={classes.screen} />
              <GridSide item xs={12} className={classes.screenLine}></GridSide>
            </Grid>
            <Grid item xs={12}>
              <div className="theatre">
                <div className="cinema-seats left">
                  <div className="cinema-row row-0">{renderLableChair()}</div>
                  {renderRowMovieChair(1)}
                </div>
                <div className="cinema-seats right">
                  <div className="cinema-row row-0">{renderLableChair()}</div>
                  {renderRowMovieChair(9)}
                </div>
              </div>
            </Grid>
            <Grid container>
              {/* <Grid item xs={2}></Grid> */}
              <Grid item xs={3} className={classes.infoChair}>
                <div className={classes.infoChair__1} />
                <span>Ghế thường</span>
              </Grid>
              <Grid item xs={3} className={classes.infoChair}>
                <div className={classes.infoChair__2} />
                <span>Ghế VIP</span>
              </Grid>
              <Grid item xs={3} className={classes.infoChair}>
                <div className={classes.infoChair__3} />
                <span>Ghế đang chọn</span>
              </Grid>
              <Grid item xs={3} className={classes.infoChair}>
                <div className={classes.infoChair__4} />
                <span>Ghế đã có người chọn</span>
              </Grid>
            </Grid>
          </GridBG>
        </Grid>
      </Grid>

      <Grid item xs={3}>
        <p className={classes.p__sumMoney}>
          {`${state.sumMoney.toLocaleString()} đ`}
        </p>
        {renderTenPhim()}
        <Button onClick={handleBooking}>Mua Vé</Button>
      </Grid>
    </GridNav>
  );
}
const mapStateToProps = (state) => ({
  data: state.listBookingChairReducer.data,
  themeMode: state.navbarHomeReducer.themeMode,
  dataUser: state.signInHomeReducer.data,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchChangeTheme: () => {
      dispatch(actChangeTheme());
    },
    fetchListBookingChair: (maLichChieu) => {
      dispatch(actListBookingChair(maLichChieu));
    },
    handleBookingTicket: (ticket) => {
      dispatch(actBookingTicket(ticket));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
