import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const NavBar = () => {
    return (
      <Navbar className='font-weight-light navigation' bg="dark" variant="dark" fixed='top'>
        <Navbar.Brand>
          <Link className='nav-brand' to="home" spy={true} smooth={true} duration={500}>RyanEvns</Link>
        </Navbar.Brand>
        <Nav className="mr-auto nav-links-container">
          <Link className='nav-links font-weight-lighter' to="home" spy={true} smooth={true} duration={500}>Home</Link>
          <Link className='nav-links font-weight-lighter' to="bio" spy={true} smooth={true} duration={500}>Bio</Link>
          <Link className='nav-links font-weight-lighter' to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link>
          <Link className='nav-links font-weight-lighter' to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
        </Nav>
      </Navbar>
    );
}

export default NavBar;
