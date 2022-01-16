import React from 'react'
import styled from 'styled-components'
import Form from './Form/Form'
import CTA from './CTA/CTA'

const Wrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 6rem;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 5rem;
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
