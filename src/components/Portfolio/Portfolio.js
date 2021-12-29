import React from "react";
import "./Portfolio.css";
import styled from "styled-components";

import chessAppGif from '../../assets/chess-app.gif'
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
    id: 'chess-app',
    descriptionText1: "I started picking up chess during the pandemic after watching Netlix's The Queen's Gambit \
    and figured it would be a great project to work on learning Object Oriented Programming principles and Unit Testing.",
    descriptionText2: "I decided to build the UI and all the chess rules from scratch instead of using the myriad of wonderful chess libraries out \
    so I can truly get a grasp of a relatively complicated project for me.",
    descriptionText3: "All the UI and rules were built on React & Javascript. \
    However the 'play best move' button is using a stockfish engine called through a Python Flask app I created. Lastly, \
    I bought a Rasperry Pi microcomputer to host said Flask app.",
    stack: ['html5', 'css', 'js', 'react', 'ruby', 'rails', 'python', 'flask', 'raspberryPi'],
    imgSrc: chessAppGif,
    imgAlt: 'chess app gif',
    handleGoToApp: handleGoToApp('https://chess-app-mikey-esteban.netlify.app/'),
    handleGoToGithub: handleGoToGithub('https://github.com/Mikey-Esteban/chess-app-frontend')
  }

  const waldoProps = {
    id: 'waldo-app',
    descriptionText1: 'A simple game looking to find Waldo. Built with a React front end and a Rails backend and Postgres database to save and record scores.',
    stack: ['html5', 'css', 'js', 'react', 'ruby', 'rails', 'postgres'],
    imgSrc: wheresWaldoGif,
    imgAlt: 'wheres waldo gif',
    handleGoToApp: handleGoToApp("https://wheres-waldo-mikey-esteban.netlify.app/"),
    handleGoToGithub: handleGoToGithub("https://github.com/Mikey-Esteban/wheres-waldo-frontend")
  }

  const weatherProps = {
    id: 'weather-app',
    descriptionText1: 'A simple weather app build with React to play around with APIs. Open Weather API, \
      Country Flags API, and Giphy API were used in this project.',
    stack: ['html5', 'css', 'js', 'react'],
    imgSrc: weatherGif,
    imgAlt: 'weather app gif',
    handleGoToApp: handleGoToApp("https://mikey-esteban.github.io/weather-app/"),
    handleGoToGithub: handleGoToGithub("https://mikey-esteban.github.io/weather-app/")
  }

  return (
    <Wrapper>
      <Project props={chessProps} />
      <Project props={waldoProps} />
      <Project props={weatherProps} />
    </Wrapper>
  );
};

export default Portfolio;
