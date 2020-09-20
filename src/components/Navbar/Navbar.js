import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "./Navbar.css";
const MyNavBar = () => {
  return (
    <div className="bg-primary text-center">
      <Navbar.Brand className="text-white" href="#home">CricMe</Navbar.Brand>
      <Navbar bg="primary" className="justify-content-center" expand="lg">
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse className="justify-content-center" id="navbar-toggle">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Players</Nav.Link>
            <Nav.Link href="#home">News</Nav.Link>
            <Nav.Link href="#home">Matches</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
//<Navbar.Brand href="#home">CricMe</Navbar.Brand>
