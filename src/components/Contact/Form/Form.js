import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  max-width: 320px;
  color: var(--softRed);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  input, textarea {
    padding: 10px;
    background: none;
    border-top: 1px solid var(--darkblue);
    border-right: 1px solid var(--darkblue);
    border-left: 1px solid var(--darkblue);
    border-bottom: 1px solid white;
    color: white;
    font-family: "Poppins", sans-serif;
  }

  input:focus, textarea:focus {
    outline: none;
    border: 1px solid white;
  }

  input::placeholder, textarea::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  input:-ms-input-placeholder, textarea:-ms-input-placeholder{ /* Internet Explorer 10-11 */
    color: white;
  }

  input::-ms-input-placeholder, textarea::-ms-input-placeholder { /* Microsoft Edge */
    color: white;
  }

  button {
    width: 100%;
    padding: 10px 0;
    background-color: var(--softRed);
    border: 1px solid var(--softRed);
    color: white;
    cursor: pointer;
    transition: all ease-in-out 150ms;
  }

  button:hover {
    background-color: var(--hoverRed);
    border: 1px solid var(--hoverRed);
  }

`

const InputsField = styled.div`
  display: flex;
  gap: 1rem;
`

const Form = () => {

  // useState for active input
  const [ activeInput, setActiveInput ] = useState()
  // useState for user data
  const [ userData, setUserData] = useState({
    name: null,
    email: null,
    message: null
  })

  useEffect(() => {
    let inputsNodeList = document.querySelectorAll('.clickableInput')
    let inputs = Array.from(inputsNodeList)
    console.log(inputs);

    inputs.map(input => input.addEventListener('click', youClickedInput))

    const contact = document.querySelector('#contact')
    contact.addEventListener('click', didYouClickInput)
  }, [])

  const youClickedInput = () => {
    console.log('YOU CLICKED AN INPUT');
  }

  const didYouClickInput = e => {
    console.log(e.target.classList.contains('clickableInput'));
  }

  const handleInputChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    setUserData({...userData, [e.target.name]:e.target.value})
  }

  return (
    <StyledForm>
      <h3>Get in touch</h3>
      <InputsField>
        <div className="field">
          <label htmlFor="name">name</label>
          <input
            className="clickableInput"
            type="text"
            name="name"
            placeholder="name"
            value={userData.name || ''}
            onChange={handleInputChange}
          />
          <p>error</p>
        </div>
        <input
          className="clickableInput"
          type="email"
          name="email"
          placeholder="email"
          value={userData.email || ''}
          onChange={handleInputChange}
        />
      </InputsField>
      <textarea
        className="clickableInput"
        name="message" id="" cols="45" rows="6"
        placeholder="Type your message here.."
        value={userData.message || ''}
        onChange={handleInputChange}
      ></textarea>
      <button>Submit</button>
    </StyledForm>
  )
}

export default Form
