import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ScrollToTop from './helpers/ScrollToTop'

import {
  Welcome,
  About,
  Portfolio,
  Navbar,
  Footer
} from './components'

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
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
