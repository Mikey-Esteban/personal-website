import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ScrollToTop from './helpers/ScrollToTop'

import {
  Main,
  Welcome,
  About,
  Portfolio,
  Navbar,
  Burger,
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

    return welcome.clientHeight + about.clientHeight + portfolio.clientHeight
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
    shouldRenderBurger()
    window.addEventListener('resize', shouldRenderBurger)
    // set height for showing contact
    window.addEventListener('resize', findHeightUntilContact)
    window.addEventListener('scroll', shouldShowContactCTA)

  }, [])

  const renderNavbar = () => {
      return isBurgerNavbar ? <Burger /> : <Navbar />
  }

  return (
    <Router>
      {renderNavbar()}
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Main showContactCTA={showContactCTA} />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
};

export default App;
