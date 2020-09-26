import React from "react";

import Navbar from "../Navbar";
import Home from "../../pages/Home";
import Footer from "../Footer";

import "./App.css";

const App = () => {
  return (
    <div className="bg-dark home-wrapper">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};
export default App;
