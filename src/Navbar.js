import React, { Fragment } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: start;
  width: 100%;
  height: 80px;
  padding-top: 5px;

  color: white;
  font-weight: 400;
  font-style: normal;

  * {
    margin: 0 10px;

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
        <a href="/">Home</a>
      </div>
      <div>About</div>
      <div>
        <a href="/portfolio">Portfolio</a>
      </div>
      <div>Contact</div>
    </Wrapper>
  );
};

export default Navbar;
