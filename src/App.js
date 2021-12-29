import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar";
import {
  Welcome,
  Portfolio
} from './components'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
