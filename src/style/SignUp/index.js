import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage:
      "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
    borderRadius: 10,
    color: "white",
    // height: 650,
  },
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    marginTop: 20,
    width: 200,
    height: 100,
    verticalAlign: "middle",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
  checkbox: {
    color: "white !important",
  },
  alert: {
    fontSize: "12px !important",
    padding: "0px 10px !important",
  },
  alertSignIn: {
    fontSize: "15px !important",
    // padding: "0px 10px !important",
    marginBottom: "20px !important",
  },
  link: {
    color: "rgb(63,81,181) !important",
  },
  disableBtn: {
    backgroundColor: "rgba(63,81,181) !important",
    color: "white !important",
    opacity: "0.5",
  },
  copyRight: {
    paddingBottom: 10,
  },
}));
export const CssTextField = withStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "rgb(63,81,181)",
    },
    "& label.Mui-disabled": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "rgb(63,81,181)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(63,81,181)",
      },
      "&.Mui-disabled": {
        backgroundColor: "rgba(63,81,181) !important",
        opacity: "0.5",
      },
    },
  },
})(TextField);
