import React from "react";
import { Container, TextBox } from "./Offer.elements";
import mobileTransform from "../../images/mobile/image-transform.jpg";

const Offer = () => {
  return (
    <>
      <Container>
        <div className=" offer_wrap">
          <img src={mobileTransform} alt="egg" />
          <TextBox>
            <h2 className="title">Transform your brand</h2>
            <p className="description">
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <div className="btn_wrap">
              <a href="#" className="btn_link">
                Learn more
              </a>
              <div className="decoration"></div>
            </div>
          </TextBox>
        </div>
      </Container>
    </>
  );
};

export default Offer;
