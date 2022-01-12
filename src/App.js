import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ScrollToTop from './helpers/ScrollToTop'

import {
  Main,
  Navbar,
  Burger,
  Menu,
  Footer
} from './components'


const App = () => {

  const [ open, setOpen ] = useState()
  const [ isBurgerNavbar, setIsBurgerNavbar ] = useState()
  const [ showContactCTA, setShowContactCTA ] = useState()

  const shouldRenderBurger = () => {
    console.log('SHOULD RENDER BURGER', window.innerWidth);
    window.innerWidth < 800 ? setIsBurgerNavbar(true) : setIsBurgerNavbar(false)
  }

  const findHeightUntilContact = () => {
    let welcome = document.querySelector('#home');
    let about = document.querySelector('#about');
    let portfolio = document.querySelector('#portfolio');
    let contact = document.querySelector('#contact');
    let footer = document.querySelector('#footer');

    return welcome.clientHeight + about.clientHeight + portfolio.clientHeight - contact.clientHeight- footer.clientHeight
  }

  const shouldShowContactCTA = () => {
    console.log('SCROLL POSITION', window.scrollY);
    console.log('HEIGHT UNTIL', findHeightUntilContact());
    if (window.scrollY >= findHeightUntilContact()) {
      console.log('YAY IM GONNA SHOW');
      setShowContactCTA(true)
    } else {
      setShowContactCTA(false)
    }
  }

  useEffect(() => {
    // check to see if burger or not
    shouldRenderBurger()
    window.addEventListener('resize', shouldRenderBurger)
    // set height for showing contact
    window.addEventListener('resize', findHeightUntilContact)
    window.addEventListener('scroll', shouldShowContactCTA)

  }, [])

  const renderNavbar = () => {
      return (
        isBurgerNavbar ?
        <>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </>
        : <Navbar />
      )
  }

  return (
    <Router>
      {renderNavbar()}
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Main showContactCTA={showContactCTA} />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
};

export default App;
