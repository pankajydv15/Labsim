import React, { useState } from 'react';
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi"
import {Link} from 'react-router-dom';
import logo from '../../../Assests/logo.png'


const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className='main-nav'>
                <div className='logo'> 
                <img src= {logo} alt='Logo'img/>
                </div>
                <div className= {showMediaIcons ? "navbar mobile-navbar" : 'navbar'}>
                    <ul className='menu-link'>
                        <li>
                            <Link to ='/'> HOME</Link> 
                        </li>

                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>

                        <li>
                            <Link to='/service'>Service</Link>
                        </li>

                        <li >
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                        
                    </ul>

                    <div className='hamburger-menu'>
                        <a to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
