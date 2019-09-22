import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" size="xs" style={{ height: '74px', minWidth: '716px' }}>
            {/* NavBar left branding text */}
            <Navbar.Brand classname="NavBarBrandType" href="/">RYANEVNS</Navbar.Brand>
            <Navbar size="xs" className="mr-auto">
                <NavLink to='/portfolio'>PORTFOLIO</NavLink>
                <NavLink to='/blog'>BLOG</NavLink>
                <NavLink to='/contact'>CONTACT</NavLink>
            </Navbar>
        </Navbar>
    );
}

export default NavBar;
