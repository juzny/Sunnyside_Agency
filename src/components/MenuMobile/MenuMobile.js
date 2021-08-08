import React from "react";
import { Container, MenuList, MenuItem } from "./MenuMobile.elements";

const MenuMobile = ({ isOpen, toggle }) => {
  return (
    <>
      <Container className={"menu " + (isOpen && "active")}>
        <MenuList>
          <MenuItem>
            <a href="#about" className="menu__link" onClick={toggle}>
              About
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#services" className="menu__link" onClick={toggle}>
              Services
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#projects" className="menu__link" onClick={toggle}>
              Projects
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#contact" className="menu__link" onClick={toggle}>
              Contact
            </a>
          </MenuItem>
        </MenuList>
      </Container>
    </>
  );
};

export default MenuMobile;
