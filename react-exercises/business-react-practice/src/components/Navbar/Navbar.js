import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul className='nav'>
                <li className='nav__item logo'>Home</li>
                <li className='nav__item'>About</li>
                <li className='nav__item'>More</li>
                <li className='nav__item'>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
