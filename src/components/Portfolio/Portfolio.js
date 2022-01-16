import React from "react";
import "./Portfolio.css";
import styled from "styled-components";

import clientWebsiteGif from '../../assets/caitlyn-marr-website.gif';
import chessAppGif from '../../assets/chess-app.gif';
import coffeeshopGif from '../../assets/coffeeshop.gif';
import wheresWaldoGif from "../../assets/wheres-waldo.gif";
import weatherGif from "../../assets/weather-app.gif";

import Project from './Project/Project'

const Wrapper = styled.div`
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 8rem;
  margin: 0 auto;

  width: 90%;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4rem; */

  #portfolioWrapper {
    margin: 0 auto;
    display: grid;
    gap: 80px 0;
    grid-template-columns: repeat(12, 90px);
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
      "a a a a a a b b b b b b"
      "a a a a a a b b b b b b"
      "a a a a a a b b b b b b"
      "c c c c d d d d e e e e"
      "c c c c d d d d e e e e"
      "c c c c d d d d e e e e"
    ;

    @media only screen and (max-width: 1150px) {
      grid-template-columns: repeat(12, 75px);

      #client-website, #coffee-shop {
        width: 400px;

        .container, .image {
          width: 300px;
        }
        img {
          width: 300px;
          object-fit: cover;
        }
      }

      #chess-app, #waldo-app, #weather-app {
        width: 300px;

        .container, .image {
          width: 240px;
        }
        img {
          width: 240px;
          object-fit: cover;
        }
      }
    }

    @media only screen and (max-width: 950px) {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;

      #client-website, #coffee-shop, #chess-app, #waldo-app, #weather-app {
        width: 300px;

        .container, .image {
          width: 300px;
        }
        img {
          width: 300px;
          object-fit: cover;
        }
      }
    }
  }

  #client-website, #coffee-shop {
    width: 540px;

    .container, .image {
      width: 400px;
    }
    img {
      width: 400px;
      object-fit: cover;
    }
  }

  #client-website {
    grid-area: a;
  }
  #coffee-shop {
    grid-area: b;
  }
  #chess-app {
    grid-area: c;
  }
  #waldo-app {
    grid-area: d;
  }
  #weather-app {
    grid-area: e;
  }
`;

const Portfolio = () => {

  const handleGoToApp = url => () => window.open(url)
  const handleGoToGithub = url => () => window.open(url)

  const clientWebsiteProps = {
    title: 'Client Website',
    'id': 'client-website',
    descriptionText1: "A responsive website I made for an actor. Some functionalities include \
    being able to send a message via email to the client directly on site and hooking up the Instagram Basic Display API to show current posts. \
    Frontend built with React and styled through Styled Components. Backend build with Rails and a Postgres Database to hold the instagram posts.",
    frontendStack: ['html5', 'css', 'js', 'react'],
    backendStack: ['ruby', 'rails', 'postgres'],
    imgSrc: clientWebsiteGif,
    imgAlt: 'client website gif',
    handleGoToApp: handleGoToApp('https://caitlyn-marr.netlify.app/'),
    handleGoToGithub: handleGoToGithub('https://github.com/Mikey-Esteban/caitlyn-marr-website')
  }

  const chessProps = {
    title: 'Chess',
    id: 'chess-app',
    descriptionText1: "A project to work on learning Object Oriented Programming principles and Unit Testing.",
    descriptionText2: "UI and all the chess rules built from scratch.",
    descriptionText3: "'play best move' button calls a Python Flask app to use a stockfish engine. Lastly, \
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
    descriptionText1: "Classic childhood game Where's Waldo. Built with a React Frontend, Rails Backend, and Postgres Database to save and record scores.",
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
    <Wrapper id="portfolio">
      <h1>Projects</h1>
      <div id="portfolioWrapper">
        <Project props={clientWebsiteProps} main={true}/>
        <Project props={coffeeShopProps} main={true}/>
        <Project props={chessProps} main={false}/>
        <Project props={waldoProps} main={false}/>
        <Project props={weatherProps} main={false}/>
      </div>
    </Wrapper>
  );
};

export default Portfolio;
