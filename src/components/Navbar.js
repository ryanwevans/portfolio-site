import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const NavBar = () => {
    return (
      <Navbar className='font-weight-light navigation' bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>
          <Nav.Link>
            <Link className='nav-brand-text' to="home" spy={true} smooth={true} duration={800}>RyanEvns</Link>
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="mr-auto nav-links-container" justify>
          <Nav.Link>
          <Link className='nav-link-texts' to="home" spy={true} smooth={true} duration={800}>Home</Link>
          </Nav.Link>
          <Nav.Link>
          <Link className='nav-link-texts' to="about" spy={true} smooth={true} duration={800} offset={-50}>About</Link>
          </Nav.Link>
          <Nav.Link>
          <Link className='nav-link-texts' to="portfolio" spy={true} smooth={true} duration={800} offset={-50}>Portfolio</Link>
          </Nav.Link>
          <Nav.Link>
          <Link className='nav-link-texts' to="contact" spy={true} smooth={true} duration={800} offset={-50}>Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default NavBar;
