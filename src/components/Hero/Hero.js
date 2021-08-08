import React from "react";
import { Container, Text } from "./Hero.elements";
import arrow from "../../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <>
      <Container className="hero">
        <Text>
          <h1 className="title">We are creatives</h1>
          <img src={arrow} alt="" className="arrow" />
        </Text>
      </Container>
    </>
  );
};

export default Hero;
