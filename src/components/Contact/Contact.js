import React from 'react'
import styled from 'styled-components'
import Form from './Form/Form'
import CTA from './CTA/CTA'

const Wrapper = styled.div`
  padding-top: 3rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`

const Empty = styled.div`
  width: 40%;
  min-height: 200px;
`

const Contact = ({showContactCTA}) => {
  return (
    <Wrapper id="contact">
      {showContactCTA && <CTA /> }
      {showContactCTA === false && <Empty />}
      <Form />
    </Wrapper>
  )
}

export default Contact
