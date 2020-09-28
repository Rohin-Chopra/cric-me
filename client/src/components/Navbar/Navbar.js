import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import "./Navbar.css";
const MyNavBar = () => {
  return (
    <div className="bg-primary text-center">
      <Navbar.Brand className="text-white" href="#home">
        CricMe
      </Navbar.Brand>
      <Navbar bg="primary" className="justify-content-center" expand="lg">
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse className="justify-content-center" id="navbar-toggle">
          <Nav>
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/news">
              <Nav.Link href="#home">News</Nav.Link>
            </Link>
            <Link to="/matches">
              <Nav.Link href="#home">Matches</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
//<Navbar.Brand href="#home">CricMe</Navbar.Brand>
