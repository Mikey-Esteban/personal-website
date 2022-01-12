import React from 'react'
import styled from 'styled-components';

import { Coffee } from '@styled-icons/boxicons-solid/Coffee'

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

  #small-text {
    display: flex;
    font-size: 2vmin;

    @media only screen and (max-width: 900px) {
      font-size: 3vmin;
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
            I have a soft spot for coffee shops
            <Coffee size={24} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default CTA
