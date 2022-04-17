import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className="container">
                <p>&copy; Copyright {currentYear}, All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;