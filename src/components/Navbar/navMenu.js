import React from 'react'

import MobileNavbar from './mobileNav/mobileNav';
import Nav from './Nav/Navbar';
function NavMenu() {
    return (
        <div className='NavbarContent'>
            <MobileNavbar/>,
            <Nav/>
        </div>
    )
}

export default NavMenu
