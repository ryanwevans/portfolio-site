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
          <Nav.Link>
          <Link className='nav-link-texts' to="home" spy={true} smooth={true} duration={800}>Home</Link>
          </Nav.Link>
          <Nav.Link>
          <Link className='nav-link-texts' to="bio" spy={true} smooth={true} duration={800} offset={-50}>Bio</Link>
          </Nav.Link>
          <Nav.Link>
          <Link className='nav-link-texts' to="portfolio" spy={true} smooth={true} duration={800}>Portfolio</Link>
          </Nav.Link>
          <Nav.Link>
          <Link className='nav-link-texts' to="contact" spy={true} smooth={true} duration={800}>Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default NavBar;
