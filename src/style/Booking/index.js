import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  // bgColor: {
  //     backgroundColor: "white",
  // },
  navbar: {
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
    zIndex: 3,
    position: "fixed",
    width: "75%",
  },
  logo: {
    width: 50,
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
    fontSize: 25,
  },
  avatar: {
    display: "flex",
    alignItems: "center",
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
      width: 20,
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
    height: "90vh",
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
    padding: "20px 10px",

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
    bottom: 2,
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
    zIndex: 2,
  },
  leftSide: {
    background: "none",
  },
  contain__chair: {
    position: "relative",
    height: 400,
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
}));
