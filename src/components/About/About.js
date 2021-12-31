import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import ericnamGif from '../../assets/ericnam.gif'
import mooncultureGif from '../../assets/moonculture.gif'
import abdcPic from '../../assets/abdc4.jpg'
import hzChina from '../../assets/hzChina.jpg'


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--red);
    font-weight: 600;
  }
`
const SectionWrapper = styled.div`
  max-width: 500px;
  min-width: 400px;

  .projects {
    color: var(--red);
    cursor: pointer;
    font-weight: 600;
  }

  @media only screen and (max-width: 550px) {
    margin: 0 1rem;
  }

  @media only screen and (max-width: 425px) {
    margin: 0;
    width: 380px;
    font-size: .9rem;

    p {
      padding: 1rem;
      letter-spacing: .08rem;
    }
  }
`
const GifWrapper = styled.span`
  img {
    width: 400px;
  }
`

const ImageWrapper = styled.div`
  display: flex;

  img {
    display: block;
    width: 100%;
  }

  .image {
    position: relative;
    width: 200px;
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
    background: rgba(0, 0, 0, 0.9);
    font-size: .8rem;
    opacity: 1;
    transition: all ease-in-out 150ms;
  }

  .image__overlay:hover {
    opacity: 0;
  }
`

const About = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <h3>I love creating.</h3>

      <SectionWrapper>
        <p>In college I found one of my true passions, dance.</p>
         <GifWrapper><img src={mooncultureGif} alt="Mikey dancing gif"/></GifWrapper>
         <p>With a lot of work and extremely supportive parents, I was able to spend my 20s
          traveling all over the world and experience things I never dreamed of.</p>
          <ImageWrapper>
            <div className="image">
              <img className="image__img" src={abdcPic} alt="Fr3sh on ABDC Season 4"/>
              <div className="image__overlay">
                <p className="image__description">Fr3sh on MTV's America's Best Dance Crew</p>
              </div>
            </div>
            <div className="image">
              <img src={hzChina} alt="Mikey dancing in Hangzhou, China"/>
              <div className="image__overlay">
                <p className="image__description">Par club in Hangzhou, China</p>
              </div>
            </div>


          </ImageWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <p>As much as I love it I found myself yearning for something more intellectually stimulating.
          I started programming the summer of 2017, and completed a data science bootcamp from Rutgers University in 2019.
          Afterwards I realized data science wasn't my cup of tea, and during the pandemic
          (and just out of dance work from a North American Tour),</p>
          <GifWrapper><img src={ericnamGif} alt="Mikey dancing in Chicago"/></GifWrapper>
          <p>I dove head first into web development.</p>
      </SectionWrapper>

      <SectionWrapper>
        <p>I give a lot of credit to <a href="https://www.theodinproject.com/">The Odin Project</a> for jumpstarting my web development career.
        I've found that I truly love problem solving, and the persistence and determination needed
        to become a better developer are traits I aspire to continually cultivate.</p>

        <p>Please free free to check out some of my
          <span className="projects" onClick={() => navigate('/portfolio')}> projects </span>
          or
          <a href="https://github.com/Mikey-Esteban"> github</a>
          .
        </p>
      </SectionWrapper>
    </Wrapper>
  )
}

export default About
