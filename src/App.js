import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import styled from 'styled-components'
import ScrollToTop from './helpers/ScrollToTop'

import {
  Main,
  Navbar,
  Burger,
  Menu
} from './components'

const Wrapper = styled.div`
  position: relative;
`


const App = () => {

  const [ open, setOpen ] = useState()
  const [ isBurgerNavbar, setIsBurgerNavbar ] = useState()
  const [ showContactCTA, setShowContactCTA ] = useState()
  const [ isNavbarFixed, setIsNavbarFixed ] = useState(false)
  const [ navbarPosition, setNavbarPosition ] = useState()

  const findWelcomeHeight = () => {
    let welcome = document.querySelector('#home');
    return welcome.clientHeight
  }

  const findHeightUntilContact = () => {
    let welcome = document.querySelector('#home');
    let about = document.querySelector('#about');
    let portfolio = document.querySelector('#portfolio');
    let contact = document.querySelector('#contact');

    return welcome.clientHeight + about.clientHeight + portfolio.clientHeight - contact.clientHeight
  }

  const shouldRepositionNavbar = () => {
    let scrollPos = window.scrollY

    // changing from positioned to fixed
    if (scrollPos > (findWelcomeHeight() - (findWelcomeHeight() / 4))) {
      setIsNavbarFixed(true)
    // changing from fixed to positioned
  } else {
      setNavbarPosition(findWelcomeHeight() - (findWelcomeHeight() / 4));
      setIsNavbarFixed(false)
    }
  }

  const shouldShowContactCTA = () => {
    // if full page is viewed
    let hasVertScroll = document.body.scrollHeight > document.body.clientHeight
    if (window.scrollY >= findHeightUntilContact() || !hasVertScroll) {
      setShowContactCTA(true)
    } else {
      setShowContactCTA(false)
    }
  }

  useEffect(() => {
    shouldShowContactCTA()
    shouldRepositionNavbar()
    setNavbarPosition(findWelcomeHeight() - (findWelcomeHeight() / 4));

    // add scroll listener
    window.addEventListener('scroll', shouldShowContactCTA)
    window.addEventListener('scroll', shouldRepositionNavbar)
    window.addEventListener('resize', shouldRepositionNavbar)
    window.addEventListener('resize', shouldShowContactCTA)

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
