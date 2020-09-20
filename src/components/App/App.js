import React from "react";

import Navbar from "../Navbar";
import Home from '../../pages/Home';
import "./App.css";

const App = () => {
  return (
    <div className="bg-dark home-wrapper">
      <Navbar />
      <Home/>
    </div>
  );
};
export default App;
