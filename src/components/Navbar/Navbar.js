import React from "react";
import { useNavigate } from 'react-router-dom'

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
  let navigate = useNavigate()

  return (
    <Wrapper>
      <div>
        <p onClick={() => navigate('/')}>Home</p>
      </div>
      <div>
        <p onClick={() => navigate('/about')}>About</p>
      </div>
      <div>
        <p onClick={() => navigate('/portfolio')}>Portfolio</p>
      </div>
      <div>Contact</div>
    </Wrapper>
  );
};

export default Navbar;
