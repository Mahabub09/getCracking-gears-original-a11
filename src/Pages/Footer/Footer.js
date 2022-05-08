import React from 'react';
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-black py-3'>
            <div className='text-white  text-center my-4 '>
                <Link className='px-2 border-end ' to="/home">HOME</Link>
                <Link className='px-2 border-end' to="/blog">BLOG</Link>
                <Link className='m-2 ' to="/aboutMe">ABOUT</Link>
            </div>
            <ul className='social-icons d-flex justify-content-center align-items-center text-white my-3'>
                <li><a href='https://www.facebook.com/mahabub.remeber.it/'><FaFacebook></FaFacebook></a></li>
                <li><a href='https://twitter.com/TheMahabub'><FaTwitter></FaTwitter></a></li>
                <li><a href='https://www.linkedin.com/in/mahabub-alam-23a961173/'><FaLinkedinIn></FaLinkedinIn></a></li>
                <li><a href='https://instagram.com/me_mehbub?igshid=YmMyMTA2M2Y='><FaInstagram></FaInstagram></a></li>

            </ul>
            <h1 className='text-white text-center '>Copyright © 2022 - All right reserved by <span className='font-serif'> !!GET CRACKING GEARS!!</span></h1>

        </div>
    );
};

export default Footer;