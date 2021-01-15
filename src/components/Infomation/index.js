import React, { useState } from "react";
import "./style.scss";
import { StyledLink, StyledLinkPage } from "../Link";
import { Container, ContainerBG } from "../Container";
import Button from "../Button";
import listInfoFilm from "../../Assets/data/listInfoFilm.json";
import listInfoSmall from "../../Assets/data/listInfoSmall.json";
export default function Infomation() {
  const [watchMore, setWatchMore] = useState(0);
  const renderInfoFilm = (item) => {
    return (
      <div className="col-sm-6 info__items">
        <div>
          <StyledLink href={item.link}>
            <img className="img-fluid" src={item.img} alt="infomation" />
            <h5>{item.title}</h5>
          </StyledLink>
          <p>{item.detail}</p>
          <div className="d-flex mb-3">
            <div className="info__like">
              <img src="./img/like.png" />
              <span>1</span>
            </div>
            <div className="info__like">
              <img src="./img/comment.png" />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderInfoSmall = () => {
    return listInfoSmall.map((item, index) => {
      return (
        <div className="row mb-3" key={index}>
          <div className="col-2 col-sm-3">
            <img
              className="img-fluid info__img--small"
              src={item.img}
              alt="infoSmall"
            />
          </div>
          <div className="col-10 col-sm-9 info__text--small">
            <span>{item.detail}</span>
          </div>
        </div>
      );
    });
  };
  return (
    <ContainerBG id="info" className="info">
      <Container className="info__content px-2">
        <ul className="nav nav-tabs d-flex" id="info__tab" role="tablist">
          <li className="nav-item" role="presentation">
            <StyledLink
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#dienAnh24h"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Điện Ảnh 24h
            </StyledLink>
          </li>
          <li className="nav-item" role="presentation">
            <StyledLink
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#reView"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Review
            </StyledLink>
          </li>
          <li className="nav-item" role="presentation">
            <StyledLink
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#khuyenMai"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Khuyến Mãi
            </StyledLink>
          </li>
        </ul>
        <div className="tab-content" id="info__myTabContent">
          <div
            className="tab-pane fade show active"
            id="dienAnh24h"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div id="dienAnh24hContent1" className="pt-2">
              <div className="info__top">
                {renderInfoFilm(listInfoFilm[0])}
                {renderInfoFilm(listInfoFilm[1])}
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    {renderInfoFilm(listInfoFilm[2])}
                    {renderInfoFilm(listInfoFilm[3])}
                  </div>
                </div>
                <div className="col-sm-4">{renderInfoSmall()}</div>
              </div>
            </div>
            <div
              id="dienAnh24hContent2"
              className="pt-2"
              style={watchMore > 0 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                {renderInfoFilm(listInfoFilm[4])}
                {renderInfoFilm(listInfoFilm[5])}
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    {renderInfoFilm(listInfoFilm[6])}
                    {renderInfoFilm(listInfoFilm[7])}
                  </div>
                </div>
                <div className="col-sm-4">{renderInfoSmall()}</div>
              </div>
            </div>
            <div
              id="dienAnh24hContent3"
              className="pt-2"
              style={watchMore > 1 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                {renderInfoFilm(listInfoFilm[8])}
                {renderInfoFilm(listInfoFilm[9])}
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    {renderInfoFilm(listInfoFilm[10])}
                    {renderInfoFilm(listInfoFilm[11])}
                  </div>
                </div>
                <div className="col-sm-4">{renderInfoSmall()}</div>
              </div>
            </div>
            <div className="text-center pb-2">
              <Button
                className="btn__readmore"
                onClick={() => {
                  setWatchMore(watchMore + 1);
                  if (watchMore === 2) setWatchMore(0);
                }}
              >
                {watchMore === 2 ? "THU GỌN" : "XEM THÊM"}
              </Button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="reView"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div id="reViewContent1" className="pt-2">
              <div className="info__top">
                {renderInfoFilm(listInfoFilm[6])}
                {renderInfoFilm(listInfoFilm[7])}
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    {renderInfoFilm(listInfoFilm[8])}
                    {renderInfoFilm(listInfoFilm[9])}
                  </div>
                </div>
                <div className="col-sm-4">{renderInfoSmall()} </div>
              </div>
            </div>
            <div
              id="reViewContent2"
              className="pt-2"
              style={watchMore > 0 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                {renderInfoFilm(listInfoFilm[10])}
                {renderInfoFilm(listInfoFilm[11])}
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    {renderInfoFilm(listInfoFilm[0])}
                    {renderInfoFilm(listInfoFilm[1])}
                  </div>
                </div>
                <div className="col-sm-4">{renderInfoSmall()} </div>
              </div>
            </div>
            <div
              id="reViewContent3"
              className="pt-2"
              style={watchMore > 1 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                {renderInfoFilm(listInfoFilm[2])}
                {renderInfoFilm(listInfoFilm[3])}
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    {renderInfoFilm(listInfoFilm[4])}
                    {renderInfoFilm(listInfoFilm[5])}
                  </div>
                </div>
                <div className="col-sm-4">{renderInfoSmall()} </div>
              </div>
            </div>
            <div className="text-center pb-2">
              <Button
                className="btn__readmore"
                onClick={() => {
                  setWatchMore(watchMore + 1);
                  if (watchMore === 2) setWatchMore(0);
                }}
              >
                {watchMore === 2 ? "THU GỌN" : "XEM THÊM"}
              </Button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="khuyenMai"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div id="khuyenMaiContent1" className="pt-2">
              <div className="info__top">
                {renderInfoFilm(listInfoFilm[2])}
                {renderInfoFilm(listInfoFilm[3])}
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    {renderInfoFilm(listInfoFilm[4])}
                    {renderInfoFilm(listInfoFilm[5])}
                  </div>
                </div>
                <div className="col-sm-4">{renderInfoSmall()} </div>
              </div>
            </div>
            <div
              id="khuyenMaiContent2"
              className="pt-2"
              style={watchMore > 0 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                {renderInfoFilm(listInfoFilm[6])}
                {renderInfoFilm(listInfoFilm[7])}
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    {renderInfoFilm(listInfoFilm[8])}
                    {renderInfoFilm(listInfoFilm[9])}
                  </div>
                </div>
                <div className="col-sm-4">{renderInfoSmall()} </div>
              </div>
            </div>
            <div
              id="khuyenMaiContent3"
              className="pt-2"
              style={watchMore > 1 ? { display: "block" } : { display: "none" }}
            >
              <div className="info__top">
                {renderInfoFilm(listInfoFilm[10])}
                {renderInfoFilm(listInfoFilm[11])}
              </div>
              <div className="info_bot row">
                <div className="col-sm-8">
                  <div className="info__top">
                    {renderInfoFilm(listInfoFilm[0])}
                    {renderInfoFilm(listInfoFilm[1])}
                  </div>
                </div>
                <div className="col-sm-4">{renderInfoSmall()} </div>
              </div>
            </div>
            <div className="text-center pb-2">
              <Button
                className="btn__readmore"
                onClick={() => {
                  setWatchMore(watchMore + 1);
                  if (watchMore === 2) setWatchMore(0);
                }}
              >
                {watchMore === 2 ? "THU GỌN" : "XEM THÊM"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </ContainerBG>
  );
}
