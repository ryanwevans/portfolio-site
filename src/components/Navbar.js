import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
    return (
        <Navbar className='font-weight-light' bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">RyanEvns</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#bio">Bio</Nav.Link>
          <Link
              activeClass="active"
              to="#portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
          >Portfolio</Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default NavBar;
