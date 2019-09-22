import React from 'react';

function Navbar() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" size="xs" style={{ height: '74px', minWidth: '716px' }}>
            {/* NavBar left branding text */}
            <Navbar.Brand classname="NavBarBrandType" href="/">RYANEVNS</Navbar.Brand>
            <Navbar size="xs" className="mr-auto">
                <NavLink style={{ marginLeft: '20px' }} to='/portfolio'>PORTFOLIO</NavLink>
                <NavLink style={{ marginLeft: '20px' }} to='/blog'>BLOG</NavLink>
                <NavLink style={{ marginLeft: '20px' }} to='/contact'>CONTACT</NavLink>
            </Navbar>
        </Navbar>
    );
}

export default Navbar;