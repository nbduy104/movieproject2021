import "./style.scss";
import React from "react";
import zion from "../../Assets/Images/zion-logo.jpg";
import bocongthuong from "../../Assets/Images/bocongthuong.png";
import { StyledLinkPage } from "../Link";
export default function Footer() {
  return (
    <footer>
      <div className="tix__container px-3 py-4">
        <div className="footer__content">
          <div className="footer__logo">
            <img src={zion} alt="zion" />
          </div>
          <div className="footer__text">
            <p className="footer__label">
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </p>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
            <p>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            <p className="d-inline">Email: </p>
            <StyledLinkPage className="d-inline" to="/">
              support@tix.vn
            </StyledLinkPage>
          </div>
          <div className="text-center">
            <img
              className="footer__bct"
              src={bocongthuong}
              alt="bocongthuong"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
