import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import styled from 'styled-components'
import ScrollToTop from './helpers/ScrollToTop'

import {
  Main,
  Navbar,
  Burger,
  Menu,
  Footer
} from './components'

const Wrapper = styled.div`
  position: relative;
`


const App = () => {

  const [ open, setOpen ] = useState()
  const [ isBurgerNavbar, setIsBurgerNavbar ] = useState()
  const [ showContactCTA, setShowContactCTA ] = useState()
  const [ isNavbarFixed, setIsNavbarFixed ] = useState()
  const [ navbarPosition, setNavbarPosition ] = useState()

  const shouldRenderBurger = () => {
    window.innerWidth < 800 ? setIsBurgerNavbar(true) : setIsBurgerNavbar(false)
  }

  const findHeightUntilWelcomeEnd = () => {
    let welcome = document.querySelector('#home');
    return welcome.clientHeight
  }

  const findBottomOfMyName = () => {
    let bottom = document.querySelector('#myName').getBoundingClientRect().bottom
    console.log('name bottom is', bottom);
    setNavbarPosition(bottom + 150);
  };

  const findHeightUntilContact = () => {
    let welcome = document.querySelector('#home');
    let about = document.querySelector('#about');
    let portfolio = document.querySelector('#portfolio');
    let contact = document.querySelector('#contact');

    console.log('WHAT IS THE HEIGHT', welcome.clientHeight + about.clientHeight + portfolio.clientHeight - contact.clientHeight);

    return welcome.clientHeight + about.clientHeight + portfolio.clientHeight - contact.clientHeight
  }

  const shouldRepositionNavbar = () => {
    let welcomeHeight = document.querySelector('#home').clientHeight;
    let scrollPos = window.scrollY
    let navTop = document.querySelector('#navbar').getBoundingClientRect().top
    // if top is < than 20
    if (navTop < 20 && (welcomeHeight < scrollPos + 275)) {
      console.log('CHANGING NAVBAR FIXED TO TRUE');
      setIsNavbarFixed(true)
    } else {
      console.log('CHANGING NAVBAR FIXED TO False');
      setIsNavbarFixed(false)
    }
  }

  const shouldShowContactCTA = () => {
    if (window.scrollY >= findHeightUntilContact()) {
      console.log('YAY IM GONNA SHOW');
      setShowContactCTA(true)
    } else {
      setShowContactCTA(false)
    }
  }

  useEffect(() => {
    // check to see if burger or not
    // shouldRenderBurger()
    shouldShowContactCTA()
    shouldRepositionNavbar()
    findBottomOfMyName()
    // window.addEventListener('resize', shouldRenderBurger)
    // set height for showing contact
    window.addEventListener('resize', findHeightUntilContact)
    window.addEventListener('scroll', shouldShowContactCTA)
    window.addEventListener('scroll', shouldRepositionNavbar)
    window.addEventListener('resize', findBottomOfMyName)

  }, [])

  const renderNavbar = () => {
      return (
        isBurgerNavbar ?
        <>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </>
        : <Navbar isNavbarFixed={isNavbarFixed} navbarPosition={navbarPosition} />
      )
  }

  return (
    <Wrapper>
      <Router>
        {renderNavbar()}
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Main showContactCTA={showContactCTA} />} />
          </Routes>
        </ScrollToTop>
        {/* <Footer /> */}
      </Router>
    </Wrapper>
  );
};

export default App;
