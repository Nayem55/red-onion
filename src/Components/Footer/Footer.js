import React from 'react';
import './Footer.css'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className='footer'>
            <div className="row">
                <div className='col-6'>
                    <img className='img-fluid w-25' src="/images/logo.png" alt="" />
                </div>
                <div className='col-3 footer-link d-flex flex-column'>
                    <a href="/">About online food</a>
                    <a href="/">Read our blog</a>
                    <a href="/">Sign up to deliver</a>
                    <a href="/">Add your restaurant</a>
                </div>
                <div className='col-3 footer-link d-flex flex-column'>
                    <a href="/">Get help</a>
                    <a href="/">Read FAQs</a>
                    <a href="/">View all cities</a>
                    <a href="/">Restaurants near me</a>
                </div>
            </div>
            <p >copyright © {year} online food</p>
        </div>
    );
};

export default Footer;