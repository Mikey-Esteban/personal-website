import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  background: rgba(50, 50, 60, 1);
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  width: 100%;
  height: 40px;
  padding-top: 5px;
  padding-right: 5px;

  color: white;
  font-weight: 600;
  font-style: normal;

  * {
    margin: 0 6px;

    cursor: pointer;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Navbar = () => {

  return (
    <Wrapper>
      <div>
        <a href="#home">Home</a>
      </div>
      <div>
        <a href="#about">About</a>
      </div>
      <div>
        <a href="#portfolio">Portfolio</a>
      </div>
      <div>Contact</div>
    </Wrapper>
  );
};

export default Navbar;
