import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar";
import {
  Welcome,
  About,
  Portfolio
} from './components'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default App;
