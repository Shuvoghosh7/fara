import React from 'react';
import './Footer.css'
import logo11 from '../../Assets/logo11.png'
import map from '../../Assets/map.JPG'
import { FiFacebook } from 'react-icons/fi';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { GrYoutube } from 'react-icons/gr';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo'>
                <img src={logo11} alt="" />
            </div>
            <div className='contact'>
                <p>Contact With Us</p>
                <p>Fara Event Planner | 17 Robinson Ave Belmont 6104 Western Australia| 0400213236</p>
            </div>
            <div className='map'>
                <img src={map} alt="" />
            </div>
            <div className='social-icon'>
                <button>
                    <FiFacebook className='social-i' />
                </button>
                <button>
                    <FaInstagramSquare className='social-i' />
                </button>
                <button>
                    <BsTwitter className='social-i' />
                </button>
                <button>
                    <GrYoutube className='social-i' />
                </button>
            </div>
            <small className='copy-right'>Copyright &copy; Shuvo Gosh 2023 all rights reserved</small>

        </div>
    );
};

export default Footer;