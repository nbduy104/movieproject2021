import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { StyledLinkPage } from "../../../components/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { CssTextField, useStyles } from "../../../style/SignUp";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { actSignInHomeApi } from "./modules/action";
function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" align="center" className={classes.copyRight}>
      {"Copyright © "}
      <StyledLinkPage style={{ color: "white" }} to="/" exact="true">
        tix.vn
      </StyledLinkPage>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function SignIn(props) {
  useEffect(() => {
    document.body.style.background = "url(./img/bg2.jpg) center center";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundAttachment = "fixed";
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);
  const [state, setstate] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
    },
  });
  const classes = useStyles();
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      values: {
        ...state.values,
        [name]: value,
      },
    });
  };
  const _handleSubmit = (e) => {
    e.preventDefault();
    const { taiKhoan, matKhau } = state.values;
    let user = {
      taiKhoan,
      matKhau,
    };
    props.handleSubmit(user, props.history, props.maLichChieu);
  };

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img className={classes.avatar} src="./img/group@2x.png" alt="avatar" />
        <form onSubmit={_handleSubmit} className={classes.form} noValidate>
          {props.err && props.err.response ? (
            <Alert className={classes.alertSignIn} severity="error">
              {props.err.response.data}
            </Alert>
          ) : (
            ""
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CssTextField
                variant="outlined"
                required
                fullWidth
                id="taiKhoan"
                label="Tài khoản"
                name="taiKhoan"
                autoComplete="taiKhoan"
                onChange={handleOnchange}
              />{" "}
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                variant="outlined"
                required
                fullWidth
                name="matKhau"
                label="Mật khẩu"
                type="password"
                id="matKhau"
                autoComplete="current-matKhau"
                onChange={handleOnchange}
              />{" "}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              classes={{ disabled: classes.disableBtn }}
              color="primary"
            >
              Đăng nhập
            </Button>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="notify"
                    className={classes.checkbox}
                  />
                }
                label="Ghi nhớ đăng nhập"
              />{" "}
            </Grid>
            <Grid item xs={12} sm={6} container justify="flex-end">
              <StyledLinkPage className={classes.link} to="#" variant="body2">
                Quên mật khẩu
              </StyledLinkPage>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <StyledLinkPage
                  className={classes.link}
                  to="/sign-up"
                  variant="body2"
                >
                  Chưa có tài khoản tại Tix? Đăng ký ngay
                </StyledLinkPage>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={2}>
        <Copyright />
      </Box>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  err: state.signInHomeReducer.err,
  data: state.signInHomeReducer.data,
  maLichChieu: state.navBookingReducer.maLichChieu,
});
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user, history, maLichChieu) => {
      dispatch(actSignInHomeApi(user, history, maLichChieu));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
