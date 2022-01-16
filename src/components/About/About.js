import React from 'react'
import styled from 'styled-components'

import ericnamGif from '../../assets/ericnam.gif'
import mooncultureGif from '../../assets/mooncultureSmall.gif'
import abdcPic from '../../assets/abdc4.jpg'
import hzChina from '../../assets/hzChina.jpg'


const Wrapper = styled.div`
  border-bottom: 2px solid white;
  padding-top: 4rem;
  padding-bottom: 6rem;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: var(--red);
    font-weight: 600;
  }

  #aboutWrapper {
    width: 90%;
  }

  .hide {
    opacity: 0;
  }

  .fadeIn {
    animation: fadeIn 5s;
    -webkit-animation: fadeIn 5s;
    -moz-animation: fadeIn 5s;
    -o-animation: fadeIn 5s;
    -ms-animation: fadeIn 5s;
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`
const SectionWrapper = styled.div`
  padding: 0 4rem;
  max-width: 1000px;
  min-width: 400px;
  margin: 0 auto;

  #iLoveCreating {
    font-size: 1.3rem;
  }

  .projects {
    color: var(--red);
    cursor: pointer;
    font-weight: 600;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }

  @media only screen and (max-width: 425px) {
    margin: 0;
    width: 380px;
    font-size: .9rem;

    p {
      letter-spacing: .09rem;
    }
  }
`

const ImagesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`

const GifWrapper = styled.span`
  .gif {
    position: relative;
    max-height: 200px;
    height: 100%;
  }
  img {
    min-height: 150px;
    max-height: 200px;
    height: 100%;
    object-fit: cover;
  }
`

const ImageWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 850px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "gif1 gif1 gif1 gif1"
      "image1 image1 image2 image2"
    ;

    #gif1 {
      grid-area: gif1;

      img {
        width: 100%;
      }
    }
    #image1 {
      grid-area: image1;
    }
    #image2 {
      grid-area: image2;
    }
  }

  img {
    min-height: 150px;
    max-height: 200px;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .image {
    position: relative;
    max-height: 200px;
    height: 100%;
  }

  .image__overlay {
    position: absolute;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: .8rem;
    opacity: 0;
    transition: all ease-in-out 150ms;
  }

  .image__overlay:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.9);
  }
`

const About = () => {

  return (
    <Wrapper id="about">
      <h1>About</h1>
      <div id="aboutWrapper">
        <SectionWrapper>
          <h1 id="iLoveCreating" className="hide">I love creating.</h1>
          <p>In college I found one of my passions, dance.</p>
        </SectionWrapper>
        <ImagesWrapper>
          <ImageWrapper className="imageWrapper">
            <div className="image" id="image1">
              <img className="image__img" src={abdcPic} alt="Fr3sh on ABDC Season 4"/>
              <div className="image__overlay">
                <p className="image__description">Fr3sh on MTV's America's Best Dance Crew</p>
              </div>
            </div>
            <GifWrapper id="gif1">
              <div className="gif">
                <img src={ericnamGif} alt="Mikey dancing in Chicago"/>
                <div className="image__overlay">
                  <p className="image__description">North American tour with Eric Nam</p>
                </div>
              </div>
            </GifWrapper>
            <div className="image" id="image2">
              <img src={hzChina} alt="Mikey dancing in Hangzhou, China"/>
              <div className="image__overlay">
                <p className="image__description">Par club in Hangzhou, China</p>
              </div>
            </div>
          </ImageWrapper>
        </ImagesWrapper>
        <SectionWrapper>
         <p>With a lot of hard work, disciplined training, and extremely supportive parents, I was able to spend my 20s
          traveling all over the world and experience things I never dreamed of.</p>
         <p>Being a performer, choreographer, and dance educator taught me how to approach problems from all possible angles until a solution is found.
          Just out of dance work from a North American Tour because of the pandemic (and completing a Data Science Bootcamp from Rutgers University in February 2020),
          I dove head first into web development.</p>
        </SectionWrapper>

        <SectionWrapper>
          <p>I give a lot of credit to <a href="https://www.theodinproject.com/" target="_blank">The Odin Project</a> for jumpstarting my web development career.
          I've found that I truly love problem solving, find great fulfillment in being intellectually stimulated, and the persistence and determination needed
          to become a better developer are traits I aspire to continually cultivate.</p>

          <p>Please free free to check out some of my
            <span className="projects" onClick={() => document.querySelector(`#portfolio`).scrollIntoView({behavior: 'smooth'})}> projects </span>
            or
            <a href="https://github.com/Mikey-Esteban" target="_blank"> github</a>
            .
          </p>
        </SectionWrapper>
      </div>
    </Wrapper>
  )
}

export default About
