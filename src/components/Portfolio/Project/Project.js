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

  .description {
    font-size: 16px;
    font-weight: 300;
    letter-spacing: .05rem;
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
    id, descriptionText1,
    descriptionText2, descriptionText3,
    stack, imgSrc, imgAlt,
    handleGoToApp, handleGoToGithub
  } = props

  const iconLegend = {
    'html5': <Html5 size={24} color={'#e34c26'} />,
    'css': <Csswizardry size={24} color={'#4169e1'} />,
    'js': <Javascript size={24} color={'#F0DB4F'} />,
    'react': <ReactLogo size={24} color={'#61DBFB'} />,
    'ruby': <Ruby size={24} color={'#A91401'} />,
    'rails': <Rubyonrails size={24} color={'#CC0000'} />,
    'postgres': <Postgresql size={24} color={'#008bb9'}/>,
    'python': <Python size={24} color={'#4B8BBE'} />,
    'flask': <Flask size={24} />,
    'raspberryPi': <Raspberrypi size={24} color={'#C51A4A'} />
  }

  let icons = stack.map(item => iconLegend[item])

  return (
    <Wrapper id={id} >
      <hr/>
      <h6>Stack</h6>
      <IconsWrapper>
        {icons}
      </IconsWrapper>
      <hr/>
      <div className="description">
        <p>{descriptionText1}</p>
        <p>{descriptionText2}</p>
        <p>{descriptionText3}</p>
      </div>

      <ImageWrapper>
        <img src={imgSrc} alt={imgAlt} />
      </ImageWrapper>

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
