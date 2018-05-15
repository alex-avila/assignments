import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav__list content-wrap">
                <div className="nav__item logo">HOME</div>
                <div className="nav__item">About</div>
                <div className="nav__item">Products</div>
                <div className="nav__item">Contact</div>
            </div>
        </nav>
    );
};

export default Navbar;