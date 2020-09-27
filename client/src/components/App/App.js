import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "../Navbar";
import Home from "../../pages/Home";
import News from "../../pages/News";
import Matches from "../../pages/Matches"
import Footer from "../Footer";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="bg-dark home-wrapper">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={News} />
          <Route path="/matches" exact component={Matches} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
