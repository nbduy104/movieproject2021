import React, { Component } from "react";
import Logo from "../../Assets/Images/web-logo.png";
import { MenuItem, Icon } from "@material-ui/core";
import "./style.scss";
import listCity from "../../Assets/data/listCity.json";
import { actChangeTheme, actHideNavbar } from "./modules/action";
import { connect } from "react-redux";
import Button from "../Button";
import Select from "../Select";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";
import { DarkTheme } from "Themes/DarkTheme";
import { ContainerNav } from "../Container";
import { StyledLink } from "../Link";
import { Link } from "react-router-dom";
import Popovers from "../Popovers";
import "reactjs-popup/dist/index.css";
import AlertRodal from "../RodalSignOut";
class NavbarHome extends Component {
  _handleShowNavBar = (isHidden) => {
    this.props.handleShowNavbar(isHidden);
  };
  render() {
    return (
      <>
        <ContainerNav className="header">
          <div className="header__content">
            <nav className="navbar navbar-expand-lg p-0">
              <Link
                className="header__left"
                exact="true"
                to="/"
                onClick={() => {
                  this._handleShowNavBar(false);
                }}
              >
                <img src={Logo} alt="logo" />
              </Link>
              {!this.props.isHidden ? (
                <div className="nav-item header__center">
                  <ul>
                    <li>
                      <StyledLink href="#moviesSection">Lịch chiếu</StyledLink>
                    </li>
                    <li>
                      <StyledLink href="#showtimes">Cụm rạp</StyledLink>
                    </li>
                    <li>
                      <StyledLink href="#info">Tin tức</StyledLink>
                    </li>
                    <li>
                      <StyledLink href="#apps">Ứng dụng</StyledLink>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}

              <div className="nav-item header__right">
                <div className="div__header__right">
                  <Popovers />
                  <Button
                    className="themeMode"
                    onClick={() => {
                      this.props.fetchChangeTheme();
                    }}
                  >
                    {this.props.themeMode === DarkTheme ? (
                      <BrightnessMediumIcon />
                    ) : (
                      <BrightnessHighIcon />
                    )}
                  </Button>
                  <Icon
                    className="fa fa-map-marker-alt"
                    style={{ fontSize: 15 }}
                  />
                  <Select
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    className="selCity"
                    defaultValue="Hồ Chí Minh (TP)"
                  >
                    {listCity.map((city, index) => (
                      <MenuItem key={index} value={city.name}>
                        {city.name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
            </nav>
          </div>{" "}
          <AlertRodal />
        </ContainerNav>

        <div className="header__bg"></div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  themeMode: state.navbarHomeReducer.themeMode,
  isHidden: state.navbarHomeReducer.isHidden,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchChangeTheme: () => {
      dispatch(actChangeTheme());
    },
    handleShowNavbar: (isHidden) => {
      dispatch(actHideNavbar(isHidden));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavbarHome);
