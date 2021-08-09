import React from "react";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero/Hero.js";
import Header from "./components/Header/Header.js";
import MenuMobile from "./components/MenuMobile/MenuMobile.js";
import Offer from "./components/Offer/Offer.js";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Header isOpen={isOpen} toggle={toggle} />
      <MenuMobile isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Offer />
    </>
  );
}

export default App;
