import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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
    color: var(--darkblue);
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <p>musing-meninsky-9964de.netlify.app</p>
      <p>732 770 0767</p>
      <p>michaelp.esteban@gmail.com</p>
      <p>instagram</p>
    </Wrapper>
  )
}

export default Footer
