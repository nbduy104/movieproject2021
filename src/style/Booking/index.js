import { makeStyles, withStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  // bgColor: {
  //     backgroundColor: "white",
  // },
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
  infoTheater: {
    display: "flex",
    padding: "40px 0px 15px",
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
    zIndex: 1,
    height: "100%",
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
  btn__booking: {
    // width: "100%",
    position: "fixed",
    bottom: 2,
    "& div": {
      padding: "0 20px 20px",
      textAlign: "center",
    },
    "& button": {
      width: "100%",
    },
    "& img": {
      width: 20,
      height: 20,
      marginRight: 5,
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
}));
