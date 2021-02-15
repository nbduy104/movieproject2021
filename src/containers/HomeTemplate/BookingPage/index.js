import React, { useState, useEffect, useMemo } from "react";
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
import {
  GridNav,
  GridSide,
  GridBG,
  GridBorder,
} from "../../../components/Grid";
import "./index.scss";
import { actListBookingChair, actBookingTicket } from "./modules/action.js";
import { TextFieldM, LabelM } from "../../../components/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import AlertRodal from "../../../components/RodalSignOut";
import Countdown from "react-countdown";
import ButtonM from "@material-ui/core/Button";
import Rodal from "rodal";
import listCombo from "../../../Assets/data/listCombo.json";
import { StyledLink } from "../../../components/Link";
import Checkbox from "@material-ui/core/Checkbox";
import { useMediaQuery } from "react-responsive";
function BookingPage(props) {
  //Time Booking
  const TIME_COUNTDOWN = 90000;
  //responsive
  const isMD = useMediaQuery({ query: "(max-width: 960px)" });
  const isXS = useMediaQuery({ query: "(max-width: 600px)" });
  //radioBtn hình thức thanh toán
  const [value, setValue] = React.useState("zaloPay");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [state, setstate] = useState({
    isSetPage: false,
    listBookingChair: [],
    listNumberChair: [],
    sumMoneyChair: 0,
    sumMoneyCombo: 0,
    sumMoney: 0,
    visible: false,
    isBookingCompleted: false,
    isChangeStateSumCombo: false,
    isChecked: false,
    isCheckedSmall: false,
    listComboDetail: [],
  });
  useEffect(() => {
    document.body.style.background = "url(../img/bg2.jpg) center center";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundAttachment = "fixed";
    props.fetchListBookingChair(props.match.params.id);
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //Sum Money Booking

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
    if (!danhSachGhe) return;
    return danhSachGhe.find((item) => {
      return item.tenGhe === tenGhe;
    });
  };
  const hanldeChooseChair = (word, number) => {
    let flag = false;
    let { listBookingChair, listNumberChair, sumMoneyChair } = state;
    // let tenGhe = handleNumberChair(word, number);
    let chairInfo = getInfoChair(word, number);
    if (!chairInfo || chairInfo.daDat === true) return;
    // listBookingChair.map((item, index) => {
    //   if (item.maGhe === chairInfo.maGhe) {
    //     sumMoneyChair -= chairInfo.giaVe;
    //     listBookingChair.splice(index, 1);
    //     listNumberChair.splice(index, 1);
    //     flag = true;
    //     return flag;
    //   }
    // });
    for (let i = 0; i < listBookingChair.length; i++) {
      if (listBookingChair[i].maGhe === chairInfo.maGhe) {
        sumMoneyChair -= chairInfo.giaVe;
        listBookingChair.splice(i, 1);
        listNumberChair.splice(i, 1);
        flag = true;
      }
    }
    if (!flag) {
      listBookingChair.push({ maGhe: chairInfo.maGhe, giaVe: chairInfo.giaVe });
      listNumberChair.push(word + number);
      sumMoneyChair += chairInfo.giaVe;
    }
    setstate({
      ...state,
      listBookingChair,
      listNumberChair,
      sumMoneyChair,
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
              className={classes.nameChair}
              style={
                state.listNumberChair.includes(word + number)
                  ? { display: "block" }
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
    if (!thongTinPhim) return;
    let tenCumRap = thongTinPhim.tenCumRap.split("-");
    return (
      <>
        <img src={thongTinPhim.hinhAnh} alt={thongTinPhim.tenPhim} />
        <div>
          <span style={{ color: "green" }}>{tenCumRap[0]}</span>
          <span>- {tenCumRap[1]}</span>
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
      maLichCHieu: props.match.params.id,
      danhSachVe: state.listBookingChair,
      taiKhoanNguoiDung: props.dataUser.taiKhoan,
    };
    setstate({
      ...state,
      isBookingCompleted: true,
    });
    props.handleBookingTicket(ticket);
  };
  const renderTenPhim = () => {
    if (!props.data) return;
    const { thongTinPhim } = props.data;
    if (!thongTinPhim) return;
    return (
      <GridBorder className={classes.div__tenPhim}>
        <span className={classes.span__label}>C18</span>
        <span> {thongTinPhim.tenPhim}</span>
        <br />
        <span>{thongTinPhim.tenCumRap}</span>
        <span>{` - ${thongTinPhim.tenRap}`}</span>
      </GridBorder>
    );
  };

  const renderer = ({ minutes, seconds }) => {
    // Render a countdown
    return (
      <h3>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h3>
    );
  };
  const alertHide = () => {
    setstate({
      ...state,
      visible: false,
    });
    props.history.replace("/");
  };
  const refeshPage = () => {
    window.location.reload();
  };
  const alertShow = () => {
    setstate({
      ...state,
      visible: true,
    });
  };
  const alertComplete = () => {
    setstate({
      ...state,
      isBookingCompleted: false,
    });
    props.history.replace("/");
  };
  const getDate = () => {
    return Date.now() + TIME_COUNTDOWN;
  };
  const getDateMemo = useMemo(getDate, []);
  const fetchBookChair = () => {
    if (state.listNumberChair[0]) {
      return state.listNumberChair.map((item) => {
        return <span key={item}>{item}, </span>;
      });
    } else return <p>Vui lòng chọn ghế</p>;
  };
  const handleCountCombo = (number, combo) => {
    let { listComboDetail, isChangeStateSumCombo } = state;

    if (!listComboDetail[0]) {
      if (number === 1) {
        combo.count++;
        isChangeStateSumCombo = !isChangeStateSumCombo;
      }
      setstate({
        ...state,
        listComboDetail: [...listComboDetail, combo],
      });
      return;
    }
    let isLastCombo = false;
    for (let i = 0; i < listComboDetail.length; i++) {
      if (listComboDetail[i].nameCombo === combo.nameCombo) {
        if (number === -1 && listComboDetail[i].count === 0) {
          listComboDetail[i].count = 0;
        } else if (number === -1 && listComboDetail[i].count >= 0) {
          listComboDetail[i].count--;
          isChangeStateSumCombo = !isChangeStateSumCombo;
        } else if (number === 1) {
          listComboDetail[i].count++;
          isChangeStateSumCombo = !isChangeStateSumCombo;
        }
        isLastCombo = true;
        break;
      } else {
        isLastCombo = false;
      }
    }
    if (!isLastCombo) {
      if (number === 1) {
        combo.count++;
        isChangeStateSumCombo = !isChangeStateSumCombo;
      }
      listComboDetail = [...listComboDetail, combo];
    }
    setstate({
      ...state,
      isChangeStateSumCombo,
      listComboDetail,
    });
  };
  const renderDetailCombo = (combo) => {
    if (!combo) return;
    return combo.arrayCombo.map((item, index) => (
      <Grid container key={index} className={classes.detailCombo}>
        <Grid container item xs={10}>
          <Grid item xs={2}>
            <img
              src={process.env.PUBLIC_URL + "/img/popcorn.png"}
              alt="popcorn"
            />
          </Grid>
          <Grid item xs={10} className="pl-2">
            <StyledLink
              data-toggle="collapse"
              href={`#${combo.numberCombo + index}`}
              role="button"
            >
              {item.nameCombo}
            </StyledLink>
            <p id={`${combo.numberCombo + index}`} className="collapse">
              {item.detail}
            </p>
            <span
              className={classes.priceCombo}
            >{`${item.gia.toLocaleString()} đ`}</span>
          </Grid>
        </Grid>
        <Grid container item xs={2} className={classes.number__Combo}>
          <Button
            onClick={() => {
              handleCountCombo(-1, item);
            }}
          >
            -
          </Button>
          <span>{item.count}</span>
          <Button
            onClick={() => {
              handleCountCombo(1, item);
            }}
          >
            +
          </Button>
        </Grid>
      </Grid>
    ));
  };
  const renderCombo = () => {
    return listCombo.map((combo, index) => {
      return (
        <GridBorder key={index} className={classes.combo}>
          <h3>{combo.styleCombo}</h3>
          {renderDetailCombo(combo)}
        </GridBorder>
      );
    });
  };
  useEffect(() => {
    let { sumMoneyChair, listComboDetail } = state;
    let sumMoney = 0;
    let sumMoneyCombo = 0;
    listComboDetail.forEach((item) => (sumMoneyCombo += item.gia * item.count));
    // listComboDetail.map((item) => {
    //   sumMoneyCombo += item.gia * item.count;
    // });
    sumMoney = sumMoneyChair + sumMoneyCombo;
    setstate({
      ...state,
      sumMoneyCombo,
      sumMoney,
    });
  }, [state.sumMoneyChair, state.isChangeStateSumCombo, state.listComboDetail]); // eslint-disable-line react-hooks/exhaustive-deps
  const renderSumMoney = () => {
    return (
      <p className={classes.p__sumMoney}>
        {`${state.sumMoney.toLocaleString()}`}
      </p>
    );
  };
  return (
    <Grid container>
      <Grid item md={9} style={{ width: "100%" }}>
        <GridNav item xs={12} container className={classes.navbar}>
          <Grid item xs={2}>
            <Link exact="true" to="/">
              <img className={classes.logo} src={Logo} alt="logo" />
            </Link>
          </Grid>
          <Grid item xs={7} lg={7} container>
            {!isMD ? (
              <>
                <Grid
                  item
                  xs={6}
                  className={clsx(classes.active, classes.navContent)}
                >
                  <span className={classes.spanNumber}>
                    <span>01</span>
                    CHỌN GHẾ & THANH TOÁN
                  </span>
                </Grid>
                <Grid item xs={6} className={classes.navContent}>
                  <span className={classes.spanNumber}>
                    <span>02</span>
                    KẾT QUẢ ĐẶT VÉ
                  </span>
                </Grid>
              </>
            ) : (
              <>
                <Grid
                  item
                  sm={6}
                  xs={12}
                  className={
                    state.isSetPage
                      ? classes.navContent
                      : clsx(classes.active, classes.navContent)
                  }
                >
                  <span
                    style={
                      isXS && state.isSetPage
                        ? { display: "none" }
                        : { display: "block" }
                    }
                    className={classes.spanNumber}
                  >
                    <span>01</span>
                    CHỌN GHẾ
                  </span>
                </Grid>
                <Grid
                  item
                  sm={6}
                  xs={12}
                  className={
                    !state.isSetPage
                      ? classes.navContent
                      : clsx(classes.active, classes.navContent)
                  }
                >
                  <span
                    style={
                      isXS && !state.isSetPage
                        ? { display: "none" }
                        : { display: "block" }
                    }
                    className={classes.spanNumber}
                  >
                    <span>02</span>
                    THANH TOÁN
                  </span>
                </Grid>
              </>
            )}
          </Grid>
          <Grid item xs={3} lg={3} className={classes.avatar}>
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
        </GridNav>
        <Grid item xs={12} style={{ height: 60 }}></Grid>
        {/* Responsive Booking */}
        {state.isSetPage && isMD ? (
          <GridNav
            // className={classes.position__rightSide}
            style={
              !state.isSetPage ? { display: "none" } : { display: "block" }
            }
          >
            <Grid item xs={12}>
              <GridBorder className={classes.div__content}>
                {renderSumMoney()}
              </GridBorder>
              {renderTenPhim()}
              <GridBorder container className={classes.div__content}>
                <div>
                  {state.listNumberChair[0] ? <span>Ghế: </span> : ""}
                  {fetchBookChair()}
                </div>
                <p>{`${state.sumMoneyChair.toLocaleString()} đ`}</p>
              </GridBorder>
              <GridBorder container className={classes.div__content}>
                {/* Start Drawer */}

                <Button
                  role="button"
                  data-toggle="collapse"
                  data-target="#collapse__Combo"
                >
                  <p> Chọn combo</p>
                </Button>

                {/* End Drawer */}
                <p>{`${state.sumMoneyCombo.toLocaleString()} đ`}</p>
              </GridBorder>
              <GridBorder className="collapse__Combo">
                <div id="collapse__Combo" className="collapse">
                  <div style={{ width: "100%", height: 300, zIndex: 2 }}>
                    {renderCombo()}
                  </div>
                </div>
              </GridBorder>
              <GridBorder container className={classes.div__content}>
                <TextFieldM
                  label="Mã giảm giá"
                  className={classes.textfield__salesoff}
                ></TextFieldM>
                <button className="btn btn-danger" disabled>
                  Áp dụng
                </button>
              </GridBorder>
              <GridBorder className={classes.div__content}>
                <FormControl component="fieldset">
                  <LabelM component="legend" className={classes.label__payment}>
                    Hình thức thanh toán
                  </LabelM>
                  <RadioGroup
                    aria-label="payment"
                    name="payment"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="zaloPay"
                      control={<Radio />}
                      label={
                        <Grid container className={classes.payment}>
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/zalopay_icon.png"
                            }
                            alt="ZaloPay"
                          />
                          <p>Thanh toán qua ZaloPay</p>
                        </Grid>
                      }
                    />
                    <FormControlLabel
                      value="visaMaster"
                      control={<Radio />}
                      label={
                        <Grid container className={classes.payment}>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/img/visa_mastercard.png"
                            }
                            alt="visa"
                          />
                          <p>Visa, Master, JCB</p>
                        </Grid>
                      }
                    />
                    <FormControlLabel
                      value="atm"
                      control={<Radio />}
                      label={
                        <Grid container className={classes.payment}>
                          <img
                            src={process.env.PUBLIC_URL + "/img/atm.png"}
                            alt="atm"
                          />
                          <p>Thẻ ATM nội địa</p>
                        </Grid>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </GridBorder>
              <GridBorder className={classes.info__booking}>
                <Checkbox
                  // checked={checked}
                  onChange={(e) => {
                    setstate({
                      ...state,
                      isCheckedSmall: e.target.checked,
                    });
                  }}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/img/exclamation.png"}
                    alt="exclamation"
                  />
                  <span>
                    Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua
                    tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.
                  </span>
                </div>
              </GridBorder>

              <Grid item className={classes.btn__bookingSmall}>
                <Button
                  onClick={() => {
                    setstate({
                      ...state,
                      isSetPage: false,
                    });
                  }}
                >
                  Trở lại
                </Button>
                <Button
                  onClick={handleBooking}
                  disabled={
                    !state.isCheckedSmall || !state.listBookingChair[0]
                      ? true
                      : false
                  }
                >
                  Thanh Toán
                </Button>
              </Grid>
            </Grid>
          </GridNav>
        ) : (
          <Grid item xs={12} container className={classes.leftSide__container}>
            <Grid item sm={1}></Grid>
            <GridBG
              item
              sm={11}
              container
              className={classes.leftSide__contain}
            >
              <Grid container className={classes.info}>
                <Grid item xs={8} className={classes.infoTheater}>
                  {renderThongTinRap()}
                </Grid>
                <Grid item xs={4} className={classes.timeAccess}>
                  <span>Thời gian giữ ghế</span>
                  <Countdown
                    date={getDateMemo}
                    renderer={renderer}
                    zeroPadTime={2}
                    onComplete={alertShow}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.contain__screen}>
                <img src={screen} className={classes.screen} alt="screen" />
                <GridSide
                  item
                  xs={12}
                  className={classes.screenLine}
                ></GridSide>
              </Grid>
              <Grid item xs={12} className={classes.contain__chair}>
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
              {!isMD && (
                <GridNav className="collapse__Combo">
                  <div id="collapse__Combo" className="collapse width">
                    <div style={{ width: 400 }}>
                      {renderCombo()}
                      <div
                        role="button"
                        data-toggle="collapse"
                        data-target="#collapse__Combo"
                        className={classes.overlay}
                      ></div>
                    </div>
                  </div>
                </GridNav>
              )}
              <Grid container>
                {/* <Grid item xs={2}></Grid> */}
                <Grid item xs={6} md={3} className={classes.infoChair}>
                  <div className={classes.infoChair__1} />
                  <span>Ghế thường</span>
                </Grid>
                <Grid item xs={6} md={3} className={classes.infoChair}>
                  <div className={classes.infoChair__2} />
                  <span>Ghế VIP</span>
                </Grid>
                <Grid item xs={6} md={3} className={classes.infoChair}>
                  <div className={classes.infoChair__3} />
                  <span>Ghế đang chọn</span>
                </Grid>
                <Grid item xs={6} md={3} className={classes.infoChair}>
                  <div className={classes.infoChair__4} />
                  <span>Ghế đã có người chọn</span>
                </Grid>
              </Grid>
              {isMD && (
                <Grid container className={classes.div__bookingRES}>
                  <Grid item xs={6} className={classes.chair__bookingRES}>
                    {state.listNumberChair[0] ? <span>Ghế: </span> : ""}
                    {fetchBookChair()}
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      className={clsx(classes.btn__bookingRES)}
                      disabled={!state.listBookingChair[0] ? true : false}
                      onClick={() => {
                        setstate({
                          ...state,
                          isSetPage: true,
                        });
                      }}
                    >
                      Tiếp tục
                    </Button>
                  </Grid>
                </Grid>
              )}
            </GridBG>
          </Grid>
        )}
      </Grid>
      {/* Start Bill Booking */}
      <GridNav
        className={classes.position__rightSide}
        style={isMD ? { display: "none" } : { display: "block" }}
      >
        <Grid item xs={12}>
          <GridBorder className={classes.div__content}>
            {renderSumMoney()}
          </GridBorder>
          {renderTenPhim()}
          <GridBorder container className={classes.div__content}>
            <div>
              {state.listNumberChair[0] ? <span>Ghế: </span> : ""}
              {fetchBookChair()}
            </div>
            <p>{`${state.sumMoneyChair.toLocaleString()} đ`}</p>
          </GridBorder>
          <GridBorder container className={classes.div__content}>
            {/* Start Drawer */}
            <Button
              role="button"
              data-toggle="collapse"
              data-target="#collapse__Combo"
            >
              <p> Chọn combo</p>
            </Button>
            {/* End Drawer */}
            <p>{`${state.sumMoneyCombo.toLocaleString()} đ`}</p>
          </GridBorder>
          <GridBorder container className={classes.div__content}>
            <TextFieldM
              label="Mã giảm giá"
              className={classes.textfield__salesoff}
            ></TextFieldM>
            <button className="btn btn-danger" disabled>
              Áp dụng
            </button>
          </GridBorder>
          <GridBorder className={classes.div__content}>
            <FormControl component="fieldset">
              <LabelM component="legend" className={classes.label__payment}>
                Hình thức thanh toán
              </LabelM>
              <RadioGroup
                aria-label="payment"
                name="payment"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="zaloPay"
                  control={<Radio />}
                  label={
                    <Grid container className={classes.payment}>
                      <img
                        src={process.env.PUBLIC_URL + "/img/zalopay_icon.png"}
                        alt="ZaloPay"
                      />
                      <p>Thanh toán qua ZaloPay</p>
                    </Grid>
                  }
                />
                <FormControlLabel
                  value="visaMaster"
                  control={<Radio />}
                  label={
                    <Grid container className={classes.payment}>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/img/visa_mastercard.png"
                        }
                        alt="visa"
                      />
                      <p>Visa, Master, JCB</p>
                    </Grid>
                  }
                />
                <FormControlLabel
                  value="atm"
                  control={<Radio />}
                  label={
                    <Grid container className={classes.payment}>
                      <img
                        src={process.env.PUBLIC_URL + "/img/atm.png"}
                        alt="atm"
                      />
                      <p>Thẻ ATM nội địa</p>
                    </Grid>
                  }
                />
              </RadioGroup>
            </FormControl>
          </GridBorder>
          <GridBorder className={classes.info__booking}>
            <Checkbox
              // checked={checked}
              onChange={(e) => {
                setstate({
                  ...state,
                  isChecked: e.target.checked,
                });
              }}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/exclamation.png"}
                alt="exclamation"
              />
              <span>
                Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin
                nhắn ZMS (tin nhắn Zalo) và Email đã nhập.
              </span>
            </div>
          </GridBorder>
          <Grid item className={classes.btn__booking}>
            <Button
              onClick={handleBooking}
              disabled={
                !state.isChecked || !state.listBookingChair[0] ? true : false
              }
            >
              Mua Vé
            </Button>
          </Grid>
        </Grid>
      </GridNav>

      {/* End Bill Booking */}
      <AlertRodal />
      <Rodal
        visible={state.visible}
        onClose={alertHide}
        animation="flip"
        showCloseButton={false}
        height={250}
      >
        <div className={classes.rodal__containt}>
          <img
            src={process.env.PUBLIC_URL + "/img/questionIcons.webp"}
            alt="Question"
          />
          <h2>Bạn có muốn đặt vé lại</h2>
          <ButtonM onClick={refeshPage} variant="contained" color="primary">
            Đồng ý
          </ButtonM>
          <ButtonM onClick={alertHide} variant="contained">
            Hủy
          </ButtonM>
        </div>
      </Rodal>
      <Rodal
        visible={state.isBookingCompleted}
        onClose={alertComplete}
        animation="flip"
        showCloseButton={false}
        height={250}
      >
        <div className={classes.rodal__containt}>
          <img
            src={process.env.PUBLIC_URL + "/img/completed.webp"}
            alt="Completed"
          />
          <h2>Đặt vé thành công</h2>
          <ButtonM
            onClick={alertComplete}
            variant="contained"
            color="secondary"
          >
            Về trang chủ
          </ButtonM>
        </div>
      </Rodal>
    </Grid>
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
