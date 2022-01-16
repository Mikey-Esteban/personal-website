import React, { useState, useEffect } from 'react'
import Welcome from '../Welcome/Welcome'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contact from '../Contact/Contact'


const Main = ({showContactCTA}) => {

  // useState for Window height value
  const [ windowHeight, setWindowHeight ] = useState(null)


  const grabILoveCreatingTag = () => document.querySelector('#iLoveCreating')

  const reportWindowSize = () => {
    setWindowHeight(windowHeight)
  }

  const willShowILoveCreatingTag = () => {
    let min = 300
    const tag = grabILoveCreatingTag()
    if (window.scrollY > min) {
      tag.classList.remove('hide')
      tag.classList.add('fadeIn')
    } else {
      // add hide classlist if not there
      if (!tag.classList.contains('hide')) {
        tag.classList.add('hide')
        tag.classList.remove('fadeIn')
      }
    }
  }

  useEffect(() => {
    // update window resize value
    window.addEventListener('resize', reportWindowSize)
    // check to see if i love creating tag is shown
    document.addEventListener('scroll', willShowILoveCreatingTag)
  }, [])

  return (
    <>
      <Welcome />
      <Portfolio />
      <About />
      <Contact showContactCTA={showContactCTA} />
    </>
  )
}

export default Main
