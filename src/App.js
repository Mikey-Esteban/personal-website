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

  const shouldRenderBurger = () => {
    console.log('SHOULD RENDER BURGER', window.innerWidth);
    window.innerWidth < 800 ? setIsBurgerNavbar(true) : setIsBurgerNavbar(false)
  }

  useEffect(() => {
    // check to see if burger or not
    window.addEventListener('resize', shouldRenderBurger)

  }, [])

  const renderNavbar = () => {
      return isBurgerNavbar ? <Burger /> : <Navbar />
  }

  return (
    <Router>
      {renderNavbar()}
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Main />} />
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
