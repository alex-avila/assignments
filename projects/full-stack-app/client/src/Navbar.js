import React, { Component } from 'react';

import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="header__nav">
                <div className="nav__wrapper">
                    <div className="nav__logo"></div>
                    <div className="nav__action--add"></div>
                </div>
            </nav>
        );
    }
}

export default Navbar;