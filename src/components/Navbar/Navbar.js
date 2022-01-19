import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  position: ${(props) => props.isNavbarFixed ? 'fixed' : 'absolute'};

  z-index: 101;
  background: rgba(73, 72, 83, .9);
  top: ${(props) => props.isNavbarFixed ? `0` : `${props.navbarPosition}px`};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding-top: 5px;
  padding-right: 5px;

  color: white;
  font-weight: 600;
  font-size: 1.2rem;

  * {
    margin: 0 6px;
    cursor: pointer;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Navbar = ({isNavbarFixed, navbarPosition}) => {

  console.log('NAVBAR PROPS: isNavbarFixed', isNavbarFixed);
  console.log('NAV POSITION', navbarPosition);

  return (
    <Wrapper isNavbarFixed={isNavbarFixed} navbarPosition={navbarPosition} id="navbar">
      <div>
        <a href="#portfolio">Portfolio</a>
      </div>
      <div>
        <a href="#about">About</a>
      </div>
      <div>
        <a href="#contact">Contact</a>
      </div>
    </Wrapper>
  );
};

export default Navbar;
