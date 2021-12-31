import React from "react";
import "./Portfolio.css";
import styled from "styled-components";

import chessAppGif from '../../assets/chess-app.gif';
import coffeeshopGif from '../../assets/coffeeshop.gif';
import wheresWaldoGif from "../../assets/wheres-waldo.gif";
import weatherGif from "../../assets/weather-app.gif";

import Project from './Project/Project'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const Portfolio = () => {

  const handleGoToApp = url => () => window.location = url
  const handleGoToGithub = url => () => window.location = url

  const chessProps = {
    title: 'Chess',
    id: 'chess-app',
    descriptionText1: "I started picking up chess during the pandemic after watching Netlix's The Queen's Gambit \
    and figured it would be a great project to work on learning Object Oriented Programming principles and Unit Testing.",
    descriptionText2: "I decided to build the UI and all the chess rules from scratch instead of using the myriad of wonderful chess libraries out \
    so I can truly get a grasp of a relatively complicated project for me.",
    descriptionText3: "All the UI and rules were built on React & Javascript. \
    However the 'play best move' button is using a stockfish engine called through a Python Flask app I created. Lastly, \
    I bought a Rasperry Pi microcomputer to host said Flask app.",
    frontendStack: ['html5', 'css', 'js', 'react'],
    backendStack: ['python', 'flask', 'raspberryPi'],
    imgSrc: chessAppGif,
    imgAlt: 'chess app gif',
    handleGoToApp: handleGoToApp('https://chess-app-mikey-esteban.netlify.app/'),
    handleGoToGithub: handleGoToGithub('https://github.com/Mikey-Esteban/chess-app-frontend')
  }

  const coffeeShopProps = {
    title: 'Coffee Shop',
    id: 'coffee-shop',
    descriptionText1: "A business site mock up for an imaginary coffee shop. Frontend built with React and styled through Styled Components. \
    Included a Rails Backend and Postgres Database to hold the menu and orderable items.",
    frontendStack: ['html5', 'css', 'js', 'react'],
    backendStack: ['ruby', 'rails', 'postgres'],
    imgSrc: coffeeshopGif,
    imgAlt: 'coffee shop app gif',
    handleGoToApp: handleGoToApp('https://coffee-shop-mikey-esteban.netlify.app/'),
    handleGoToGithub: handleGoToGithub('https://github.com/Mikey-Esteban/coffee-shop-frontend')
  }

  const waldoProps = {
    title: "Where's Waldo?",
    id: 'waldo-app',
    descriptionText1: "Classic childhood game Where's Waldo. Built with a React front end, Rails backend, and Postgres database to save and record scores.",
    frontendStack: ['html5', 'css', 'js', 'react'],
    backendStack: ['ruby', 'rails', 'postgres'],
    imgSrc: wheresWaldoGif,
    imgAlt: 'wheres waldo gif',
    handleGoToApp: handleGoToApp("https://wheres-waldo-mikey-esteban.netlify.app/"),
    handleGoToGithub: handleGoToGithub("https://github.com/Mikey-Esteban/wheres-waldo-frontend")
  }

  const weatherProps = {
    title: "Weather API",
    id: 'weather-app',
    descriptionText1: 'A simple weather app built with React to play around with APIs. Open Weather API, \
      Country Flags API, and Giphy API were used in this project.',
    frontendStack: ['html5', 'css', 'js', 'react'],
    backendStack: [],
    imgSrc: weatherGif,
    imgAlt: 'weather app gif',
    handleGoToApp: handleGoToApp("https://mikey-esteban.github.io/weather-app/"),
    handleGoToGithub: handleGoToGithub("https://mikey-esteban.github.io/weather-app/")
  }

  return (
    <Wrapper>
      <Project props={coffeeShopProps} />
      <Project props={chessProps} />
      <Project props={waldoProps} />
      <Project props={weatherProps} />
    </Wrapper>
  );
};

export default Portfolio;
