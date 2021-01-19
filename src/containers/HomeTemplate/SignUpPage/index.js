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
import "./style.scss";
import { connect } from "react-redux";
import { actSignUpHomeApi } from "./modules/action";
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

function SignUp(props) {
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
      email: "",
      soDt: "",
      maNhom: "GP02",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
      lastName: "",
      firstName: "",
      checkmatKhau: "",
    },
    errors: {
      lastName: "",
      firstName: "",
      taiKhoan: "",
      matKhau: "",
      checkmatKhau: "",
      email: "",
      soDt: "",
    },
    lastNameValid: false,
    firstNameValid: false,
    taiKhoanValid: false,
    matKhauValid: false,
    checkmatKhauValid: false,
    emailValid: false,
    soDtValid: false,
    notifyValid: false,
    formValid: false,
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
    const {
      taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung,
      lastName,
      firstName,
    } = state.values;
    const user = {
      taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung,
      hoTen: lastName + " " + firstName,
    };
    props.handleSubmit(user, props.history);
  };
  const handleErrors = (e) => {
    const { name, value, checked } = e.target;
    const { firstName, lastName } = state.values;
    let mess = value === "" ? "*Xin hãy điền thông tin!" : "";
    let {
      lastNameValid,
      firstNameValid,
      taiKhoanValid,
      matKhauValid,
      checkmatKhauValid,
      emailValid,
      soDtValid,
      notifyValid,
    } = state;
    let patternName = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );
    let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    switch (name) {
      case "lastName":
        if (value && !value.match(patternName)) {
          mess = "*Họ không được chứa ký tự đặt biệt!";
        }
        lastNameValid = mess !== "" ? false : true;
        break;
      case "firstName":
        if (value && !value.match(patternName)) {
          mess = "*Tên không được chứa ký tự đặt biệt!";
        }
        firstNameValid = mess !== "" ? false : true;
        break;
      case "taiKhoan":
        if (value && (value.length < 4 || value.length > 12)) {
          mess = "*Tài khoản phải từ 4 đến 12 ký tự!";
        }
        taiKhoanValid = mess !== "" ? false : true;
        break;
      case "matKhau":
        if (value && value.length < 6) {
          mess = "*Mật khẩu phải từ 6 ký tự!";
        }
        matKhauValid = mess !== "" ? false : true;
        break;
      case "checkmatKhau":
        if (value && state.values.matKhau !== value) {
          mess = "*Xác thực mật khẩu không chính xác!";
        }
        checkmatKhauValid = mess !== "" ? false : true;
        break;
      case "email":
        if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          mess = "*Email không đúng định dạng!";
        }
        emailValid = mess !== "" ? false : true;
        break;
      case "soDt":
        if (value && !vnf_regex.test(value)) {
          mess =
            "*Số điện không hợp lệ! Hãy chắc rằng bạn nhập đúng 10 số. (VD: 0934567890)";
        }
        soDtValid = mess !== "" ? false : true;
        break;
      case "notify":
        notifyValid = checked;
        break;
      default:
        break;
    }
    setstate({
      ...state,
      hoTen: lastName + firstName,
      errors: { ...state.errors, [name]: mess },
      lastNameValid,
      firstNameValid,
      taiKhoanValid,
      matKhauValid,
      checkmatKhauValid,
      emailValid,
      soDtValid,
      notifyValid,
      formValid:
        lastNameValid &&
        firstNameValid &&
        taiKhoanValid &&
        matKhauValid &&
        checkmatKhauValid &&
        emailValid &&
        soDtValid &&
        notifyValid,
    });
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
            <Grid item xs={12} sm={6}>
              <CssTextField
                error={state.errors.lastName ? true : false}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Họ"
                name="lastName"
                autoComplete="lname"
                // autoFocus
                onChange={handleOnchange}
                onBlur={handleErrors}
              />
              {state.errors.lastName ? (
                <Alert className={classes.alert} severity="error">
                  {state.errors.lastName}
                </Alert>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                error={state.errors.firstName ? true : false}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Tên"
                onChange={handleOnchange}
                onBlur={handleErrors}
              />
              {state.errors.firstName ? (
                <Alert className={classes.alert} severity="error">
                  {state.errors.firstName}
                </Alert>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                error={state.errors.taiKhoan ? true : false}
                variant="outlined"
                required
                fullWidth
                id="taiKhoan"
                label="Tài khoản"
                name="taiKhoan"
                autoComplete="taiKhoan"
                onChange={handleOnchange}
                onBlur={handleErrors}
              />{" "}
              {state.errors.taiKhoan ? (
                <Alert className={classes.alert} severity="error">
                  {state.errors.taiKhoan}
                </Alert>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                error={state.errors.matKhau ? true : false}
                variant="outlined"
                required
                fullWidth
                name="matKhau"
                label="Mật khẩu"
                type="password"
                id="matKhau"
                autoComplete="current-matKhau"
                onChange={handleOnchange}
                onBlur={handleErrors}
              />{" "}
              {state.errors.matKhau ? (
                <Alert className={classes.alert} severity="error">
                  {state.errors.matKhau}
                </Alert>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                error={state.errors.checkmatKhau ? true : false}
                variant="outlined"
                required
                fullWidth
                name="checkmatKhau"
                label="Xác nhận mật khẩu"
                type="password"
                id="checkmatKhau"
                onChange={handleOnchange}
                onBlur={handleErrors}
                // autoComplete="current-matKhau"
              />{" "}
              {state.errors.checkmatKhau ? (
                <Alert className={classes.alert} severity="error">
                  {state.errors.checkmatKhau}
                </Alert>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                error={state.errors.email ? true : false}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleOnchange}
                onBlur={handleErrors}
              />{" "}
              {state.errors.email ? (
                <Alert className={classes.alert} severity="error">
                  {state.errors.email}
                </Alert>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                error={state.errors.soDt ? true : false}
                variant="outlined"
                required
                fullWidth
                id="soDt"
                label="Số điện thoại"
                name="soDt"
                autoComplete="phone-number"
                onChange={handleOnchange}
                onBlur={handleErrors}
              />{" "}
              {state.errors.soDt ? (
                <Alert className={classes.alert} severity="error">
                  {state.errors.soDt}
                </Alert>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    className={classes.checkbox}
                    color="primary"
                    name="notify"
                    onClick={handleErrors}
                  />
                }
                label="Nhận các thông báo và ưu đãi mới nhất."
              />{" "}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            classes={{ disabled: classes.disableBtn }}
            color="primary"
            disabled={state.formValid ? false : true}
          >
            Đăng ký
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <StyledLinkPage
                className={classes.link}
                to="/sign-in"
                variant="body2"
              >
                Đã có tài khoản tại Tix? Đăng nhập ngay
              </StyledLinkPage>
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
const mapStateToProps = (state) => {
  return {
    err: state.signUpHomeReducer.err,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user, history) => {
      dispatch(actSignUpHomeApi(user, history));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
