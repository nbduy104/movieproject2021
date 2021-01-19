import React from "react";
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
import { useMediaQuery } from "react-responsive";
import ViewListIcon from "@material-ui/icons/ViewList";
function NavbarHome(props) {
  // const isXXL = useMediaQuery({ query: "(min-width: 1824px)" });
  const isXL = useMediaQuery({ query: "(max-width: 1224px)" });
  const isLG = useMediaQuery({ query: "(max-width: 900px)" });
  const isXS = useMediaQuery({ query: "(max-width: 576px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const _handleShowNavBar = (isHidden) => {
    props.handleShowNavbar(isHidden);
  };
  return (
    <>
      <div className="header">
        <ContainerNav>
          <div className="header__content">
            <nav className="navbar navbar-expand-lg p-0">
              {!props.isHidden && !isLG ? (
                <div className="nav-item header__center">
                  <ul>
                    <li>
                      <StyledLink href="#moviesSection">Lịch chiếu</StyledLink>
                    </li>
                    <li>
                      <StyledLink href="#showtimes">Cụm rạp</StyledLink>
                    </li>
                    <li>
                      <Link
                        className="header__logo"
                        exact="true"
                        to="/"
                        onClick={() => {
                          _handleShowNavBar(false);
                        }}
                      >
                        <img src={Logo} alt="logo" />
                      </Link>
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
                <div
                  className="nav-item header__center"
                  style={{
                    transform: "translate(-32%,0%)",
                    zIndex: 2,
                  }}
                >
                  <ul>
                    <li>
                      <Link
                        className="header__logo"
                        exact="true"
                        to="/"
                        onClick={() => {
                          _handleShowNavBar(false);
                        }}
                      >
                        <img src={Logo} alt="logo" />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {!isXL ? (
                <div className="nav-item header__right">
                  <div className="div__header__right">
                    <Popovers />
                    <div>
                      <Button
                        className="btn__themeMode"
                        onClick={() => {
                          props.fetchChangeTheme();
                        }}
                      >
                        {props.themeMode === DarkTheme ? (
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
                </div>
              ) : (
                <>
                  <ViewListIcon
                    className="toggle__button"
                    data-toggle="collapse"
                    data-target="#collapse__Info"
                  />
                  <div className="nav-item header__right">
                    <div className="div__header__right">
                      <Popovers />
                    </div>
                  </div>
                </>
              )}
            </nav>
          </div>
          <AlertRodal />
        </ContainerNav>
        {props.themeMode === DarkTheme ? (
          <img
            className="img-fluid header__img"
            src="./img/line-header-dark.jpg"
            alt="lineheader"
          />
        ) : (
          <img
            className="img-fluid header__img"
            src="./img/line-header-light.jpg"
            alt="lineheader"
          />
        )}
        <ContainerNav className="collapse__Info">
          <div id="collapse__Info" className="collapse width">
            <div style={{ width: 230 }}>
              <ul>
                {isLG && (
                  <>
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
                  </>
                )}
                <li className="mode__display">
                  <span>Chế độ hiển thị: </span>
                  <Button
                    className="btn__themeMode"
                    onClick={() => {
                      props.fetchChangeTheme();
                    }}
                  >
                    {props.themeMode === DarkTheme ? (
                      <>
                        <span className="mr-2">Tối</span>{" "}
                        <BrightnessMediumIcon />
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Sáng</span>{" "}
                        <BrightnessHighIcon />
                      </>
                    )}
                  </Button>
                </li>
                <li>
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
                </li>
              </ul>
            </div>
          </div>
        </ContainerNav>
      </div>

      <div className="header__bg"></div>
    </>
  );
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
