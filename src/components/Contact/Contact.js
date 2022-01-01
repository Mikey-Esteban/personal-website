import React from 'react'
import styled from 'styled-components'
import Form from './Form/Form'

const Wrapper = styled.div`
  padding-top: 3rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-around;
`

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Form />
    I AM CONTACT
    </Wrapper>
  )
}

export default Contact
