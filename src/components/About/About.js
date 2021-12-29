import React from 'react'
import styled from 'styled-components'

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
    color: #e34c26;
    font-weight: 600;
  }
`
const SectionWrapper = styled.div`
  max-width: 500px;
`
const GifWrapper = styled.div`
  img {
    width: 400px;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    display: block;
    width: 100%;
  }

  .image {
    position: relative;
    width: 180px;
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
    opacity: 1;
    transition: all ease-in-out 150ms;
  }

  .image__overlay:hover {
    opacity: 0;
  }
`

const About = () => {
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
        <p>As much as I love it, as a career it is not only (obviously) extremely difficult but I found myself yearning for
          something more intellectually stimulating. I started dabbling with programming around the summer of
          2017, and even took a data science bootcamp from Rutgers University in 2019. At then end of that bootcamp
          though I knew that the data science industry wasn't my cup of tea, and along with many people during the pandemic
          (and just out of dance work from a North American Tour),
          <GifWrapper><img src={ericnamGif} alt="Mikey dancing in Chicago"/></GifWrapper>
        I found myself with a lot of time on my hands.</p>
      </SectionWrapper>

      <SectionWrapper>
        <p>I give a lot of credit to <a href="https://www.theodinproject.com/">The Odin Project</a> for jumpstarting my web development career. I've found that I truly love problem solving, and the persistence and determination one needs
        to become a better developer are traits I aspire to continually cultivate.</p>
      </SectionWrapper>
    </Wrapper>
  )
}

export default About
