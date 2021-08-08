import React from "react";
import { Container, NavList, NavItem, NavBurger } from "./Header.elements";
import logo from "../../images/logo.svg";

const Header = ({ isOpen, toggle }) => {
  return (
    <>
      <Container className={isOpen && "active"}>
        <div className="nav_wrapper wrapper">
          <img src={logo} alt="logo" className="logo" />

          <NavList>
            <NavItem>
              <a href="#about" className="link">
                About
              </a>
            </NavItem>
            <NavItem>
              <a href="#services" className="link">
                Services
              </a>
            </NavItem>
            <NavItem>
              <a href="#projects" className="link">
                Projects
              </a>
            </NavItem>
            <NavItem>
              <a href="#contact" className="link">
                Contact
              </a>
            </NavItem>
          </NavList>
          <NavBurger onClick={toggle}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </NavBurger>
        </div>
      </Container>
    </>
  );
};

export default Header;
