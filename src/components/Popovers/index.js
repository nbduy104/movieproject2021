import React, { useState, useRef, useEffect } from "react";
import { Overlay } from "react-bootstrap";
import { connect } from "react-redux";
import avatar from "../../Assets/Images/avatar.png";
import { StyledLinkPage } from "../Link";
import { StyledTooltip } from "../Overlay";
import {
  actLogout,
  tryLogin,
} from "../../containers/HomeTemplate/SignInPage/modules/action";
import { actHideNavbar } from "../NavbarHome/modules/action";
import { withRouter } from "react-router-dom";
import { actShowInfoUserApi } from "containers/HomeTemplate/InfoUserPage/modules/action";
function Popovers(props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  useEffect(() => {
    props.handleTryLogin(props.history);
  }, []);
  const _handleLogout = () => {
    props.handleLogout(props.history);
  };
  const _handleHideNavbar = (isHidden) => {
    props.handleHideNavbar(isHidden);
    const user = JSON.parse(localStorage.getItem("User"));
    const userNew = {
      taiKhoan: user.taiKhoan,
    };
    props.fetchInfoUser(userNew);
  };
  return (
    <>
      <a ref={target} onClick={() => setShow(!show)}>
        {!props.data ? (
          <img src={avatar} alt="avatar" />
        ) : (
            <>
              <img src="https://loremflickr.com/500/500/girl/all" alt="avatar" />
              <span style={{ cursor: "pointer" }}>{props.data.hoTen}</span>
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
                  <StyledLinkPage to="/" onClick={_handleLogout}>
                    Đăng xuất
                </StyledLinkPage>
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
  handleLogout: (history) => {
    dispatch(actLogout(history));
  },
  handleTryLogin: (history) => {
    dispatch(tryLogin(history));
  },
  handleHideNavbar: (isHidden) => {
    dispatch(actHideNavbar(isHidden));
  },
  fetchInfoUser: (user) => {
    dispatch(actShowInfoUserApi(user));
  },
});
const ConnectComponent = connect(mapStateToProps, mapDispatchToProps)(Popovers);
export default withRouter(ConnectComponent);
