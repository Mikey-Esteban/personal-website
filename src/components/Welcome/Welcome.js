import React from "react";

import styled from "styled-components";

import { GithubWithCircle as Github } from '@styled-icons/entypo-social/GithubWithCircle';
import { LinkedinWithCircle as Linkedin } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { MailWithCircle as Mail } from '@styled-icons/entypo-social/MailWithCircle';
import { InstagramWithCircle as Instagram } from '@styled-icons/entypo-social/InstagramWithCircle';

const Wrapper = styled.div`
  width: 100%;
  min-width: 480px;
  min-height: calc(100vh - 80px);

  padding-top: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  font-weight: 900;
  font-style: italic;


  #myName {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    color: #cf1b1b;
    font-size: 124px;
    letter-spacing: 8px;
    cursor: pointer;
  }

  #myName::before {
    content: "Mikey";
    position: absolute;
    color: transparent;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 2px,
      white 2px,
      white 4px
    );
    -webkit-background-clip: text;
    top: 0px;
    left: 0;
    z-index: -1;
    transition: 1s;
  }

  #myName::after {
    content: "Mikey";
    position: absolute;
    color: transparent;
    background-image: repeating-linear-gradient(
      135deg,
      transparent 0,
      transparent 2px,
      white 2px,
      white 4px
    );
    -webkit-background-clip: text;
    top: 0px;
    left: 0px;
    transition: 1s;
  }

  #myName:hover:before {
    top: 5px;
    left: 5px;
  }

  #myName:hover:after {
    top: -5px;
    left: -5px;
  }

  #attributesTag {
    position: absolute;
    left: 35%;
    top: 60%;

    color: white;
    font-size: 18px;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 1s linear;
  }

  #socials {
    width: 150px;
    display: flex;
    justify-content: space-between;
  }

  #socials > * {
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 20%;
  border: 8px solid white;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;

  img {
    cursor: pointer;
    width: 200px;
  }
`

const Welcome = () => {
  const handleMouseOver = () => {
    const tag = document.querySelector("#attributesTag");
    console.log(tag);
    tag.style.visibility = "visible";
    tag.style.opacity = 1;
  };

  const handleGoTo = (location) => {
    document.querySelector(`#${location}`).scrollIntoView({behavior: 'smooth'})
  }

  return (
    <Wrapper id="home">
      <ImageWrapper>
        <img src="/assets/images/mikeySideview.jpg" alt="Mikey smiling" onClick={() => handleGoTo('portfolio')}/>
      </ImageWrapper>
      <span id="myName" onMouseOver={handleMouseOver} onClick={() => handleGoTo('about')}>
        Mikey
      </span>
      <span id="attributesTag">
        web developer, retired dancer, and aspiring chess geek :)
      </span>
      <span id="socials">
        <Github size={30} />
        <Linkedin size={30} />
        <Mail size={30} />
        <Instagram size={30} />
      </span>
    </Wrapper>
  );
};

export default Welcome;
