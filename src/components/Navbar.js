import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">RyanEvns</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    );
}

export default NavBar;
