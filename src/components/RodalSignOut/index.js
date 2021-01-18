import { connect } from "react-redux";
import { actHideAlert } from "../NavbarHome/modules/action";
import Rodal from "rodal";
// include styles
import "rodal/lib/rodal.css";
import React from "react";
import { actLogout } from "../../containers/HomeTemplate/SignInPage/modules/action";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { useStyles } from "../../style/Rodal";
import { actCheckAccount } from "components/NavbarBooking/modules/action";
// import { ContainerNav, ContainerBG } from "../Container";
function AlertRodal(props) {
  const hide = () => {
    props.handleHideAlert(false);
  };
  const _handleLogout = () => {
    props.handleHideAlert(false);
    props.handleLogout(props.history);
  };
  const classes = useStyles();
  return (
    <Rodal
      visible={props.isShowAlert}
      onClose={hide}
      animation="flip"
      showCloseButton={false}
      height={280}
    >
      <div className={classes.rodal__containt}>
        <img
          src={process.env.PUBLIC_URL + "/img/questionIcons.webp"}
          alt="Question"
        />
        <h2>Bạn có chắc muốn đăng xuất</h2>
        <Button onClick={_handleLogout} variant="contained">
          Đăng xuất
        </Button>
        <Button onClick={hide} variant="contained" color="primary">
          Hủy
        </Button>
      </div>
    </Rodal>
  );
}
const mapStateToProps = (state) => ({
  isShowAlert: state.navbarHomeReducer.isShowAlert,
});
const mapDispatchToProps = (dispatch) => ({
  handleHideAlert: (isShowAlert) => {
    dispatch(actHideAlert(isShowAlert));
  },
  handleLogout: (history) => {
    dispatch(actLogout(history));
    dispatch(actCheckAccount(0));
  },
});
const ConnectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertRodal);
export default withRouter(ConnectComponent);
