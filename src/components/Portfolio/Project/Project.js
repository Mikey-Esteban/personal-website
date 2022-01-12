import React from 'react'
import styled from 'styled-components'

// styled icons
import { Html5} from '@styled-icons/simple-icons/Html5'
import { Csswizardry } from '@styled-icons/simple-icons/Csswizardry'
import { Javascript } from '@styled-icons/simple-icons/Javascript'
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo'
import { Ruby } from '@styled-icons/simple-icons/Ruby'
import { Rubyonrails } from '@styled-icons/simple-icons/Rubyonrails'
import { Postgresql } from '@styled-icons/simple-icons/Postgresql'
import { Python } from '@styled-icons/simple-icons/Python'
import { Flask } from '@styled-icons/simple-icons/Flask'
import { Raspberrypi} from '@styled-icons/simple-icons/Raspberrypi'
import { Github } from "@styled-icons/feather/Github";

const Wrapper = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 0;
  }

  .image {
    margin-top: 1rem;
    position: relative;
    width: 480px;
  }

  .description {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .05rem;

    position: absolute;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.9);
    font-size: .8rem;
    opacity: 1;
    transition: all ease-in-out 150ms;
  }

  .description:hover {
    opacity: 0;
  }
`

const StackWrapper = styled.div`
  display: flex;
  gap: 2rem;

  h6 {
    margin: 1rem 0;
  }

  .frontend, .backend {
    display: flex;
    flex-direction: column;
  }
`

const IconsWrapper = styled.div`
  display: flex;
  gap: 5px;
`
const ImageWrapper = styled.div`
  img {
    min-width: 200px;
    max-width: 480px;
  }
`;

const Project = ({props}) => {
  const {
    title, id, descriptionText1,
    descriptionText2, descriptionText3,
    frontendStack, backendStack, imgSrc, imgAlt,
    handleGoToApp, handleGoToGithub
  } = props

  const iconLegend = {
    'html5': <Html5 key={'html5'} size={24} color={'#e34c26'} />,
    'css': <Csswizardry key={'css'} size={24} color={'#4169e1'} />,
    'js': <Javascript key={'js'} size={24} color={'#F0DB4F'} />,
    'react': <ReactLogo key={'react'} size={24} color={'#61DBFB'} />,
    'ruby': <Ruby key={'ruby'} size={24} color={'#A91401'} />,
    'rails': <Rubyonrails key={'rails'} size={24} color={'#CC0000'} />,
    'postgres': <Postgresql key={'postgres'} size={24} color={'#008bb9'}/>,
    'python': <Python key={'python'} size={24} color={'#4B8BBE'} />,
    'flask': <Flask key={'flask'} size={24} />,
    'raspberryPi': <Raspberrypi key={'raspberryPi'} size={24} color={'#C51A4A'} />
  }

  let frontendIcons = frontendStack.map(item => iconLegend[item])
  let backendIcons = backendStack.map(item => iconLegend[item])

  return (
    <Wrapper id={id} >
      <h1>{title}</h1>

      <StackWrapper>
        <div className="frontend">
          <h6>Frontend Stack</h6>
          <IconsWrapper>
            {frontendIcons}
          </IconsWrapper>
        </div>
        { backendIcons.length > 0 &&
          <div className="backend">
            <h6>Backend Stack</h6>
            <IconsWrapper>
              {backendIcons}
            </IconsWrapper>
          </div>
        }
      </StackWrapper>

      <div className="image">
        <div className="description">
          <p>{descriptionText1}</p>
          <p>{descriptionText2}</p>
          <p>{descriptionText3}</p>
        </div>
        <ImageWrapper>
          <img src={imgSrc} alt={imgAlt} />
        </ImageWrapper>
      </div>

      <div className="container">
        <div className="btn btn-one" onClick={handleGoToApp}>
          <span>Check it out!</span>
        </div>
        <div className="btn btn-one" onClick={handleGoToGithub}>
          <span>
            Github <Github size={24} />
          </span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Project
