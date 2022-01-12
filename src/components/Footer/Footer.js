import React from 'react'
import styled from 'styled-components'

import { Code } from '@styled-icons/boxicons-regular/Code'
import { Phone } from '@styled-icons/bootstrap/Phone'
import { Mail } from '@styled-icons/entypo/Mail'
import { Instagram } from '@styled-icons/bootstrap/Instagram'


const Wrapper = styled.div`
  height: 150px;
  margin-top: 1rem;
  padding: 1rem 0;
  background-color: var(--maingray);


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .7rem;

  p {
    margin: 0;
  }

  .contact {
    width: 220px;
    display: flex;
    align-items: center;
    gap: 2px;
  }

  span {
    width: 22px;
  }
`

const Footer = () => {
  return (
    <Wrapper id="footer">
      <div className="holder">
        <div className='contact'><span><Code size={20}/></span><p>mikeyesteban.com</p></div>
        <div className='contact'><span><Phone size={18}/></span><p>732 770 0767</p></div>
        <div className='contact'><span><Mail size={18}/></span><p>michaelp.esteban@gmail.com</p></div>
        <div className='contact'><span><Instagram size={16}/></span><p>mikeyesteban.design</p></div>
      </div>
    </Wrapper>
  )
}

export default Footer
