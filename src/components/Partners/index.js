import React from "react";
import "./style.scss";
import { Container, ContainerBG } from "../Container";
import cgv from "../../Assets/Images/partners/cgv.png";
import bhd from "../../Assets/Images/partners/bhd.png";
import galaxycine from "../../Assets/Images/partners/galaxycine.png";
import cinestar from "../../Assets/Images/partners/cinestar.png";
import lotte from "../../Assets/Images/partners/lotte.png";
import megags from "../../Assets/Images/partners/megags.png";
import bt from "../../Assets/Images/partners/bt.jpg";
import dongdacinema from "../../Assets/Images/partners/dongdacinema.png";
import TOUCH from "../../Assets/Images/partners/TOUCH.png";
import cnx from "../../Assets/Images/partners/cnx.jpg";
import STARLIGHT from "../../Assets/Images/partners/STARLIGHT.png";
import dcine from "../../Assets/Images/partners/dcine.png";
import zalopay_icon from "../../Assets/Images/partners/zalopay_icon.png";
import payoo from "../../Assets/Images/partners/payoo.jpg";
import VCB from "../../Assets/Images/partners/VCB.png";
import AGRIBANK from "../../Assets/Images/partners/AGRIBANK.png";
import VIETTINBANK from "../../Assets/Images/partners/VIETTINBANK.png";
import IVB from "../../Assets/Images/partners/IVB.png";
import P123go from "../../Assets/Images/partners/123go.png";
import laban from "../../Assets/Images/partners/laban.png";
import androidLogo from "../../Assets/Images/partners/android-logo.png";
import appleLogo from "../../Assets/Images/partners/apple-logo.png";
import facebookLogo from "../../Assets/Images/partners/facebook-logo.png";
import zaloLogo from "../../Assets/Images/partners/zalo-logo.png";
import { StyledLink } from "../Link";
import Footer from "components/Footer/index";
export default function Partners() {
  return (
    <ContainerBG className="partners">
      <Container className="py-4">
        <div className="row pb-4">
          <div className="div__tix d-none d-lg-block  col-lg-2">
            <h3>TIX</h3>
            <StyledLink>FAQ</StyledLink>
            <StyledLink>Brand Guidelines</StyledLink>
          </div>
          <div className="partners__item2 d-lg-block col- col-md-4 col-lg-2 d-flex align-items-center">
            <div>
              <h3 className="index__none d-none d-lg-block">TIX</h3>
              <StyledLink className="d-inline d-lg-block">
                Thỏa thuận sử dụng
              </StyledLink>
              <StyledLink className="d-inline d-lg-block">
                Chính sách bảo mật
              </StyledLink>
            </div>
          </div>
          <div className="partners__item3 d-none d-lg-block  col-lg-4 partners__img">
            <h3 className="mb-2">Đối tác</h3>
            <div className="d-flex mb-3">
              <img className="img__border" src={cgv} alt="cgv" />
              <img src={bhd} alt="bhd" />
              <img src={galaxycine} alt="galaxycine" />
              <img src={cinestar} alt="cinestar" />
              <img src={lotte} alt="lotte" />
            </div>
            <div className="d-flex mb-3">
              <img className="img__border" src={megags} alt="megags" />
              <img className="img__border" src={bt} alt="bt" />
              <img
                className="img__border"
                src={dongdacinema}
                alt="dongdacinema"
              />
              <img src={TOUCH} alt="TOUCH" />
              <img className="img__border" src={cnx} alt="cnx" />
            </div>
            <div className="d-flex mb-3">
              <img className="img__border" src={STARLIGHT} alt="STARLIGHT" />
              <img className="img__border" src={dcine} alt="dcine" />
              <img src={zalopay_icon} alt="zalopay_icon" />
              <img className="img__border" src={payoo} alt="payoo" />
              <img className="img__border" src={VCB} alt="VCB" />
            </div>
            <div className="d-flex">
              <img className="img__border" src={AGRIBANK} alt="AGRIBANK" />
              <img
                className="img__border"
                src={VIETTINBANK}
                alt="VIETTINBANK"
              />
              <img className="img__border" src={IVB} alt="IVB" />
              <img
                className="img__border img__123go"
                src={P123go}
                alt="P123go"
              />
              <img src={laban} alt="laban" />
            </div>
          </div>
          <div className="partners__item4 d-none d-lg-block  col-lg-2 partners__app text-center">
            <h3>MOBILE APP</h3>
            <div className="d-flex">
              <img src={androidLogo} alt="androidLogo" />
              <img src={appleLogo} alt="appleLogo" />
            </div>
          </div>
          <div className="partners__item4 d-lg-block col- col-md-4 col-lg-2 partners__app text-center">
            <h3 className="d-none d-lg-block">SOCIAL</h3>
            <div className="d-flex">
              <img src={facebookLogo} alt="facebookLogo" />
              <img src={zaloLogo} alt="zaloLogo" />
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </ContainerBG>
  );
}
