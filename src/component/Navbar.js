import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo11 from '../Assets/logo11.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="brand-logo">
                    <img src={logo11} alt="" />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                   <GiHamburgerMenu/>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>SERVICE</Link>
                        </li>
                        <li>
                            <Link to='/'>HIRE ITEMS</Link>
                        </li>
                        <li>
                            <Link to='/'>ABOUT  US</Link>
                        </li>
                        <li>
                            <Link to='/'>BLOG</Link>
                        </li>
                        <li>
                            <Link to='/'>PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link to='/'>CONTACT</Link>
                        </li>
                        <li>
                            <Link to='/'><AiOutlineSearch/></Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;