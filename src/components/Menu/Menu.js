import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, setOpen }) => {

  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)} >
      <a href="#welcome">
        Home
      </a>
      <a href="#about">
        About
      </a>
      <a href="#portfolio">
        Porfolio
      </a>
      <a href="#contact">
        Contact
      </a>
    </StyledMenu>
  );
};
export default Menu;
