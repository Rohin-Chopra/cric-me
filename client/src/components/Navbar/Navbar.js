import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import "./Navbar.css";

const NavLinks = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "News",
    path: "/news",
  },
  {
    text: "Matches",
    path: "/matches",
  },
];
const MyNavBar = () => {
  return (
    <div className="bg-primary text-center">
      <Link to="/">
        <Navbar.Brand className="text-white" href="#home">
          <h1>CricMe</h1>
        </Navbar.Brand>
      </Link>
      <Navbar bg="primary" className="justify-content-center" expand="lg">
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse className="justify-content-center" id="navbar-toggle">
          <Nav>
            {NavLinks.map((el) => {
              return (
                <Link to={el.path}>
                  <Nav.Link href="#home">{el.text}</Nav.Link>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
//<Navbar.Brand href="#home">CricMe</Navbar.Brand>
