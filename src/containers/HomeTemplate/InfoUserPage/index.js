import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StyledLinkPage } from "../../../components/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { CssTextField, useStyles } from "../../../style/SignUp";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { actUpdateInfoUserApi } from "./modules/action";
import { actHideNavbar } from "components/NavbarHome/modules/action";

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

function InfoUserPage(props) {
  useEffect(() => {
    document.body.style.background = "url(./img/bg2.jpg) center center";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundAttachment = "fixed";
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);
  const [state, setState] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "GP02",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
      checkmatKhau: "",
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      checkmatKhau: "",
      email: "",
      soDT: "",
    },
    hoTenValid: true,
    taiKhoanValid: false,
    matKhauValid: false,
    checkmatKhauValid: false,
    emailValid: true,
    soDTValid: true,
    formValid: false,
  });
  useEffect(() => {
    if (!localStorage.getItem("User")) return;
    const user = JSON.parse(localStorage.getItem("User"));

    setState({
      ...state,
      values: {
        ...state.values,
        hoTen: user.hoTen,
        taiKhoan: user.taiKhoan,
        matKhau: "",
        email: user.email,
        soDT: user.soDT,
      },
    });
  }, [props.data, state.matKhau]);
  const classes = useStyles();
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setState({
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
      soDT,
      maNhom,
      maLoaiNguoiDung,
      hoTen,
    } = state.values;
    const user = {
      taiKhoan,
      matKhau,
      email,
      soDT,
      maNhom,
      maLoaiNguoiDung,
      hoTen,
    };
    props.handleSubmit(user, props.history);
    props.handleShowNavbar(false);
  };
  const handleErrors = (e) => {
    const { name, value } = e.target;
    let mess = value === "" ? "*Xin hãy điền thông tin!" : "";
    let {
      hoTenValid,
      taiKhoanValid,
      matKhauValid,
      checkmatKhauValid,
      emailValid,
      soDTValid,
    } = state;
    let patternName = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );
    let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    let { checkmatKhau } = state.values;
    switch (name) {
      case "hoTen":
        if (value && !value.match(patternName)) {
          mess = "*Họ tên không được chứa ký tự đặt biệt!";
        }
        hoTenValid = mess !== "" ? false : true;
        break;
      case "matKhau":
        if (value && value.length < 6) {
          mess = "*Mật khẩu phải từ 6 ký tự!";
        }
        matKhauValid = mess !== "" ? false : true;
        checkmatKhau = "";
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
      case "soDT":
        if (value && !vnf_regex.test(value)) {
          mess =
            "*Số điện không hợp lệ! Hãy chắc rằng bạn nhập đúng 10 số. (VD: 0934567890)";
        }
        soDTValid = mess !== "" ? false : true;
        break;
      default:
        break;
    }
    setState({
      ...state,
      values: { ...state.values, checkmatKhau },
      errors: { ...state.errors, [name]: mess },
      hoTenValid,
      taiKhoanValid,
      matKhauValid,
      checkmatKhauValid,
      emailValid,
      soDTValid,
      formValid:
        hoTenValid &&
        matKhauValid &&
        checkmatKhauValid &&
        emailValid &&
        soDTValid,
    });
  };

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img className={classes.avatar} src="./img/group@2x.png" />
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
                error={state.errors.taiKhoan ? true : false}
                disabled
                variant="outlined"
                required
                fullWidth
                id="taiKhoan"
                label="Tài khoản"
                name="taiKhoan"
                value={state.values.taiKhoan}
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

            <Grid item xs={12}>
              <CssTextField
                error={state.errors.hoTen ? true : false}
                autoComplete="hoTen"
                name="hoTen"
                value={state.values.hoTen}
                variant="outlined"
                required
                fullWidth
                id="hoTen"
                label="Họ Tên"
                onChange={handleOnchange}
                onBlur={handleErrors}
              />
              {state.errors.hoTen ? (
                <Alert className={classes.alert} severity="error">
                  {state.errors.hoTen}
                </Alert>
              ) : (
                ""
              )}
            </Grid>

            <Grid item item xs={12} sm={6}>
              <CssTextField
                error={state.errors.matKhau ? true : false}
                variant="outlined"
                required
                fullWidth
                name="matKhau"
                value={state.values.matKhau}
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
            <Grid item item xs={12} sm={6}>
              <CssTextField
                error={state.errors.checkmatKhau ? true : false}
                variant="outlined"
                required
                fullWidth
                name="checkmatKhau"
                label="Xác nhận mật khẩu"
                type="password"
                id="checkmatKhau"
                value={state.values.checkmatKhau}
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
                value={state.values.email}
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
                error={state.errors.soDT ? true : false}
                variant="outlined"
                required
                fullWidth
                id="soDT"
                label="Số điện thoại"
                name="soDT"
                value={state.values.soDT}
                autoComplete="phone-number"
                onChange={handleOnchange}
                onBlur={handleErrors}
              />{" "}
              {state.errors.soDT ? (
                <Alert className={classes.alert} severity="error">
                  {state.errors.soDT}
                </Alert>
              ) : (
                ""
              )}
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
            Cập nhật thông tin
          </Button>
        </form>
      </div>
      <Box mt={2}>
        <Copyright />
      </Box>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  data: state.updateInfoReducer.dataShowInfo,
  err: state.updateInfoReducer.err,
});
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user, history) => {
      dispatch(actUpdateInfoUserApi(user, history));
    },
    handleShowNavbar: (isHidden) => {
      dispatch(actHideNavbar(isHidden));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoUserPage);
