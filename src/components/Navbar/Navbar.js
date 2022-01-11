import React from 'react'
import './navbar.css'
function Navbar() {
    return (
        <div className='NavbarContent'>
            
                <nav>
                
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/'>About Me</a>
                        </li>
                        <li>
                            <a href='/'>My Youtube</a>
                        </li>
                        <li>
                            <a href='/'>Contact Me</a>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar
