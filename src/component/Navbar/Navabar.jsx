import React from "react";
import './Navbar.css'
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Navabar = () => {
  return (
    <Navbar className='bg-transparent navbar-style' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='navbar-brand-style'>Your Ride</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="primary" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#link">Destination</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Button variant="danger" className='nav-btnp'>Log In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navabar;
