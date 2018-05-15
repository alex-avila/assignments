import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer className='content-wrap'>
            <p>&copy; 2018 FICTIONAL COMPANY, INC.</p>
            <div className='icons'>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-youtube-square"></i>
            </div>
        </footer>
    );
};

export default Footer;
