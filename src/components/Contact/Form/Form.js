import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com';
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

  .field {
    position: relative;
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    h3 {
      margin: 0;
      font-size: 1.5rem;
    }
  }

  .error {
    color: var(--softRed) !important;
    position: absolute;
    bottom: -2rem;
    height: 20px;
    font-size: .7rem;
  }

  .success {
    color: #b2ffb2;
    position: absolute;
    bottom: -2rem;
    height: 20px;
    font-size: .7rem;
  }

`

const InputsField = styled.div`
  display: flex;
  gap: 1rem;
`

const Form = () => {
  const form = useRef();

  // useState for active input
  const [ activeInput, setActiveInput ] = useState()
  // useState for errors
  const [ nameError, setNameError ] = useState()
  const [ emailError, setEmailError ] = useState()
  const [ messageError, setMessageError ] = useState()
  const [ formError, setFormError ] = useState()
  // useState for success message
  const [ successMessage, setSuccessMessage ] = useState()
  // useState for user data
  const [ userData, setUserData] = useState({
    name: null,
    email: null,
    message: null
  })



  const handleInputChange = e => {
    setUserData({...userData, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log('YOU SUBMITTED');
    if (handleValidations()) {
      // sendEmail()
      console.log('i need to send an email');
      sendEmail()
    }
  }

  const handleValidations = () => {
    // always reset errors
    setNameError()
    setEmailError()
    setMessageError()
    setFormError()
    setSuccessMessage()

    let isError = false
    let checkers = [
      {type: 'Name', value: userData.name, setter: setNameError },
      {type: 'Email', value: userData.email, setter: setEmailError },
      {type: 'Message', value: userData.message, setter: setMessageError },
    ]

    if (!validateEmail(userData.email)) {
      setEmailError('Invalid. Should follow the format user@domain.com.')
      isError = true
    }

    for ( let check in checkers ) {
      console.log('HERE IS A CHECKER', check);
      if (!validateNotEmpty(checkers[check].value)) {
        checkers[check].setter(`${checkers[check].type} is required.`)
        isError = true
      }
    }

    if (isError) {
      setFormError("Oops! I couldn't receive your message :/")
      return false
    } else {
      setSuccessMessage("Thanks for your message! I will get back to you shortly :)")
      setTimeout(() => setSuccessMessage(), 5000)
      resetInputValues()
    }

    setSuccessMessage('Awesome! I will get back to you shortly :)')
    return true
  }

  const sendEmail = () => {
    console.log(form.current)
    emailjs.sendForm('mikey_contact_service', 'mikey_contact_form', form.current, 'user_66gmO7LoQfvP4XghZH8zG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const resetInputValues = () => {
    setUserData({
      name: null,
      email: null,
      message: null
    })
  }

  // email validation
  const validateEmail = email => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // empty validate
  const validateNotEmpty = str => {
    if (!str) { return false }
    return str.length !== 0;
  };


  return (
    <StyledForm ref={form} onSubmit={handleSubmit}>
      <div className="field header">
        <h3>Get in touch</h3>
        <p className="error">{formError}</p>
        <p className="success">{successMessage}</p>
      </div>
      <InputsField>
        <div className="field">
          <input
            className="clickableInput"
            type="text"
            name="name"
            placeholder="name"
            value={userData.name || ''}
            onChange={handleInputChange}
          />
          <p className="error">{nameError}</p>
        </div>
        <div className="field">
          <input
            className="clickableInput"
            type="text"
            name="email"
            placeholder="email"
            value={userData.email || ''}
            onChange={handleInputChange}
          />
          <p className="error">{emailError}</p>
        </div>
      </InputsField>
      <div className="field">
        <textarea
          className="clickableInput"
          name="message" id="" cols="45" rows="6"
          placeholder="Type your message here.."
          value={userData.message || ''}
          onChange={handleInputChange}
        ></textarea>
        <p className="error">{messageError}</p>
      </div>
      <button type="submit">Submit</button>
    </StyledForm>
  )
}

export default Form
