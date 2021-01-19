import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    position: "absolute",
    right: 0,
  },
  containt: {
    height: "100%",
  },
}));
