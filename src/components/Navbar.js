import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">RyanEvns</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#bio">Bio</Nav.Link>
          <Nav.Link href="#features">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default NavBar;
