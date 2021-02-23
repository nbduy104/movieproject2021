import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  leftSide__container: {
    height: "100vh",
  },
  navbar: {
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
    zIndex: 3,
    position: "fixed",
    width: "75%",
    height: "60px",
  },
  logo: {
    position: "absolute",
    top: 4,
    width: 70,
    height: 50,
    marginLeft: 20,
  },
  navContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // color: " #fb4226",
    "& span": {
      fontWeight: "500",
      marginRight: 5,
    },
  },
  spanNumber: {
    "& span": {
      fontSize: 35,
    },
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& img": {
      height: "auto",
      width: 30,
      borderRadius: 25,
      marginRight: 5,
      cursor: "pointer",
    },
  },
  active: {
    color: "#fb4226",
    "& ::before": {
      height: 5,
      top: 0,
    },
  },
  themeMode: {
    border: "none !important",
    backgroundColor: "transparent !important",
    "&:focus": {
      outline: "none !important",
      backgroundColor: "transparent !important",
    },
    "&:hover": {
      color: "#fb4226 !important",
      backgroundColor: "transparent !important",
    },
    "& .MuiTouchRipple-root": {
      display: "none",
    },
  },
  contain__screen: {
    position: "relative",
    zIndex: "-1",
  },
  screen: {
    width: "100%",
    borderRadius: 5,
    position: "relative",
  },
  screenLine: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    top: 0,
    left: 0,
    width: "100%",
    height: 12,
    position: "absolute",
  },
  info: {
    padding: "40px 0px 15px",
    zIndex: "-1",
  },
  infoTheater: {
    display: "flex",

    "& img": {
      borderRadius: 5,
      marginRight: 5,
      width: "50px",
      height: "50px",
    },
    "& span": {
      fontWeight: "500",
    },
    "& p": {
      fontSize: 15,
    },
  },
  timeAccess: {
    textAlign: "end",
    "& h3": {
      color: "#fb4226",
    },
  },
  infoChair: {
    display: "flex",
    justifyContent: "center",

    "& div": {
      width: "100%",
      maxWidth: 20,
      height: 20,
      marginRight: 5,
    },
  },
  infoChair__1: {
    backgroundColor: "rgb(118, 24, 24)",
  },
  infoChair__2: {
    backgroundColor: "rgb(255, 165,0)",
  },
  infoChair__3: {
    backgroundColor: "rgb(200, 163, 163)",
  },
  infoChair__4: {
    backgroundColor: "rgb(52,11, 152)",
  },
  p__sumMoney: {
    textAlign: "center",
    color: "green",
    fontSize: 30,
    fontWeight: 700,
  },
  div__tenPhim: {
    padding: "10px 20px",
  },
  span__label: {
    backgroundColor: "red",
    color: "white",
    padding: "0px 4px",
    borderRadius: 3,
  },

  position__rightSide: {
    position: "fixed",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    top: 0,
    right: 0,
    width: "25%",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
    zIndex: 3,
    height: "100vh",
  },
  div__content: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 20px",
    "& p": {
      marginBottom: 0,
    },
  },
  textfield__salesoff: {
    border: "none !important",
    "& :before": {
      display: "none",
    },
    "& :after": {
      display: "none",
    },
    "& div": {
      marginTop: "8px",
    },
    "& label": {
      top: "-10px",
    },
    "& label.Mui-focused": {
      color: "#fb4226",
    },
  },
  info__booking: {
    display: "flex",
    alignItems: "start",
    padding: "20px 10px 100px",

    "& img": {
      width: 20,
      height: 20,
      marginRight: 5,
    },
  },
  btn__booking: {
    width: "25%",
    position: "fixed",
    right: 0,
    bottom: 0,
    "& button": {
      width: "100%",
      padding: "25px 0",
      "&.Mui-disabled": {
        color: "#fb422693",
      },
    },
  },
  btn__bookingSmall: {
    position: "fixed",
    display: "flex",
    width: "100%",
    bottom: 0,
    "& button": {
      width: "100%",
      padding: "25px 0",
      "&.Mui-disabled": {
        color: "#fb422693",
      },
    },
  },
  label__payment: {
    "&.Mui-focused": {
      color: "#fb4226",
    },
  },
  payment: {
    justyfyContent: "space-around",
    alignItems: "center",
    flexWrap: "nowrap",
    "& label": {
      marginBottom: 0,
      marginRight: 0,
    },
    "& img": {
      width: 40,
      height: 40,
      marginRight: 10,
      borderRadius: 5,
    },
  },
  rodal__containt: {
    textAlign: "center",

    "& img": {
      margin: "20px 0",
      width: 80,
      height: 80,
    },
    "& h2": {
      color: "#595959",
      fontSize: 30,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    "& button": {
      margin: "10px 10px 10px 0",
    },
  },
  leftSide__contain: {
    position: "relative",
    paddingBottom: "40px !important",
    overflow: "auto",
    height: "auto",
    zIndex: 2,
  },
  leftSide: {
    background: "none",
  },
  contain__chair: {
    position: "relative",
    height: 380,
    zIndex: "-1",
  },

  overlay: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.2)",
    zIndex: "-1",
  },
  combo: {
    padding: "20px !important",
    "& h3": {
      marginBottom: 15,
    },
  },
  detailCombo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    "& img": {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    "& a": {
      fontSize: 20,
      fontWeight: 500,
    },
    "& p": {
      marginBottom: 0,
      fontSize: 13,
    },
  },
  priceCombo: {
    color: "green",
    fontSize: 16,
    display: "block",
    fontWeight: 400,
  },
  number__Combo: {
    alignItems: "center",
    justifyContent: "space-between",
    "& button": {
      minWidth: 0,
    },
  },
  nameChair: {
    textAlign: "center",
    color: "white",
  },
  div__bookingRES: {
    marginTop: 10,
    borderTop: "1px dashed #fb422693",
    paddingTop: 20,
  },
  chair__bookingRES: {
    // border: "1px solid red",
  },
  btn__bookingRES: {
    width: "100%",
    "&.Mui-disabled": {
      color: "#fb422693",
    },
  },
  "@media screen and (max-width: 1400px)": {
    contain__chair: {
      height: 300,
    },
  },
  "@media screen and (max-width: 1280px)": {
    nameChair: {
      fontSize: 13,
    },
    spanNumber: {
      fontSize: "0.9rem",
      "& span": {
        fontSize: 28,
      },
    },
  },
  "@media screen and (max-width: 1100px)": {
    nameChair: {
      fontSize: 12,
    },
  },
  "@media screen and (max-width: 1030px)": {
    nameChair: {
      fontSize: 11,
    },
    spanNumber: {
      fontSize: "0.835rem",
      "& span": {
        fontSize: 26,
      },
    },
    infoChair: {
      justifyContent: "flex-start",
      "& span": {
        fontSize: 15,
      },
    },
  },
  "@media screen and (max-width:960px)": {
    navbar: {
      width: "100%",
    },
    spanNumber: {
      fontSize: "1rem",
      "& span": {
        fontSize: 28,
      },
    },
    infoChair: {
      justifyContent: "flex-start",
    },
  },
  "@media screen and (max-width:896px)": {
    contain__chair: {
      height: 200,
    },
  },
  "@media screen and (max-width:706px)": {
    nameChair: {
      fontSize: 10,
    },
    themeMode: {
      display: "none",
    },
    avatar: {
      justifyContent: "center",
    },
  },
  "@media screen and (max-width:620px)": {
    contain__chair: {
      height: 140,
    },
    nameChair: {
      fontSize: 8,
    },
  },
  "@media screen and (max-width:568px)": {
    contain__chair: {
      height: 120,
    },
    nameChair: {
      fontSize: 6,
    },
  },
}));
