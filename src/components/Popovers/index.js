import React, { useState, useRef, useEffect } from "react";
import { Overlay } from "react-bootstrap";
import { connect } from "react-redux";
import avatar from "../../Assets/Images/avatar.png";
import { StyledLinkPage } from "../Link";
import { StyledTooltip } from "../Overlay";
import { tryLogin } from "../../containers/HomeTemplate/SignInPage/modules/action";
import { actHideNavbar, actShowAlert } from "../NavbarHome/modules/action";
import { withRouter } from "react-router-dom";
import { actShowInfoUserApi } from "containers/HomeTemplate/InfoUserPage/modules/action";
import { StyledLink } from "components/Link/index";

function Popovers(props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  useEffect(() => {
    props.handleTryLogin(props.history);
  }, []);
  const user = JSON.parse(localStorage.getItem("User"));
  const _handleHideNavbar = (isHidden) => {
    props.handleHideNavbar(isHidden);
    const userNew = {
      taiKhoan: user.taiKhoan,
    };
    props.fetchInfoUser(userNew);
    setShow(!show);
  };
  const _handleShowAlert = () => {
    props.handleShowAlert(true);
    setShow(!show);
  };

  return (
    <>
      <a ref={target} onClick={() => setShow(!show)}>
        {!user ? (
          <img src={avatar} alt="avatar" />
        ) : (
          <>
            <img src="https://loremflickr.com/500/500/girl/all" alt="avatar" />
            <span style={{ cursor: "pointer" }}>{user.hoTen}</span>
          </>
        )}
      </a>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <StyledTooltip id="overlay-example" {...props}>
            {!localStorage.getItem("User") ? (
              <>
                <StyledLinkPage to="/sign-in">Đăng nhập</StyledLinkPage>
                {" / "}
                <StyledLinkPage to="/sign-up">Đăng ký</StyledLinkPage>
              </>
            ) : (
              <>
                <StyledLink onClick={_handleShowAlert}>Đăng xuất</StyledLink>
                {" / "}
                <StyledLinkPage
                  to="/info-user"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={() => {
                    _handleHideNavbar(true);
                  }}
                >
                  Thông tin tài khoản
                </StyledLinkPage>
              </>
            )}
          </StyledTooltip>
        )}
      </Overlay>
    </>
  );
}
const mapStateToProps = (state) => ({
  data: state.signInHomeReducer.data,
  dataUpdate: state.updateInfoReducer.data,
});
const mapDispatchToProps = (dispatch) => ({
  handleTryLogin: (history) => {
    dispatch(tryLogin(history));
  },
  handleHideNavbar: (isHidden) => {
    dispatch(actHideNavbar(isHidden));
  },
  fetchInfoUser: (user) => {
    dispatch(actShowInfoUserApi(user));
  },
  handleShowAlert: (isShowAlert) => {
    dispatch(actShowAlert(isShowAlert));
  },
});
const ConnectComponent = connect(mapStateToProps, mapDispatchToProps)(Popovers);
export default withRouter(ConnectComponent);
