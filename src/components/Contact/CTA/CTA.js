import React from 'react'
import styled from 'styled-components';

import { Coffee } from '@styled-icons/boxicons-solid/Coffee'
import { GithubWithCircle as Github } from '@styled-icons/entypo-social/GithubWithCircle';
import { LinkedinWithCircle as Linkedin } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { MailWithCircle as Mail } from '@styled-icons/entypo-social/MailWithCircle';
import { InstagramWithCircle as Instagram } from '@styled-icons/entypo-social/InstagramWithCircle';
import { Phone } from '@styled-icons/bootstrap/Phone'

const Wrapper = styled.div`
  width: 40%;
  min-height: 200px;
  position: relative;

  @keyframes showTopText {
    0% { transform: translate3d(0, 100%, 0); }
    40%, 60% { transform: translate3d(0, 50%, 0); }
    100% { transform: translate3d(0, 0, 0); }
  }
  @keyframes showBottomText {
    0% { transform: translate3d(0, -100%, 0); }
    100% { transform: translate3d(0, 0, 0); }
  }
  .animated-title {
    color: var(--maingray);
    height: 90vmin;
    left: 55%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70vmin;
  }
  .animated-title > div {
    height: 50%;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }
  .animated-title > div div {
    font-size: 4vmin;
    padding: 2vmin 0;
    position: absolute;

    @media only screen and (max-width: 900px) {
      font-size: 5vmin;
    }
  }
  .animated-title > div div span {
    display: block;
  }
  .animated-title > div.text-top {
    width: 70%;
    border-bottom: 1vmin solid #767676;
    top: 0;

    @media only screen and (max-width: 900px) {
      width: 80%;
    }
  }
  .animated-title > div.text-top div {
    animation: showTopText 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    bottom: 0;
    transform: translate(0, 100%);
  }
  .animated-title > div.text-top div span:first-child {
    color: #767676;
  }
  .animated-title > div.text-bottom {
    bottom: 0;
  }
  .animated-title > div.text-bottom div {
    animation: showBottomText 0.5s;
    animation-delay: 1.75s;
    animation-fill-mode: forwards;
    top: 0;
    transform: translate(0, -100%);
  }

  .icon:hover {
    border: 3px solid white;
    border-radius: 50%;

    background: white;
    color: var(--darkblue);
  }

  #phoneIcon {
    border: 4px solid white;
    border-radius: 50%;
    padding: 5px;

    background: white;
    color: var(--darkblue);
  }

  #phoneIcon:hover {
    background: var(--darkblue);
    color: white;
  }

  #socials {
    position: absolute;
    bottom: -90px;
    width: 130px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 4rem;
  }

  #socials > * {
    cursor: pointer;
  }

  #small-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 2vmin;

    p {
      margin: 0;
    }

    @media only screen and (max-width: 900px) {
      font-size: 2.5vmin;
    }
    @media only screen and (max-width: 480px) {
      font-size: 2.8vmin;
    }
  }

  @media only screen and (max-width: 900px) {
    width: 100%;

    .animated-title {
      top: 70%;
    }
  }
`

const CTA = () => {
  return (
    <Wrapper>
      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>In the NYC</span>
            <span>New Jersey area?</span>
          </div>
        </div>
        <div className="text-bottom">
          <div id="small-text">
            <p>Lets chat! I have a soft spot for coffee shops <Coffee size={24} /></p>
            <p>732.770.0767</p>
          </div>
        </div>
        <div id="socials">
          <Github className="icon" color={'white'} size={40} onClick={() => window.open('https://github.com/Mikey-Esteban')}/>
          <Linkedin className="icon" color={'white'} size={40} onClick={() => window.open('https://www.linkedin.com/in/michael-esteban-49285368/')}/>
          <Mail className="icon" color={'white'} size={40} onClick={() => window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=michaelp.esteban@gmail.com')}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default CTA
