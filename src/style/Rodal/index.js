import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
}));
