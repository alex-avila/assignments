import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="header__nav">
                <div className="nav__wrapper">
                    <Link to="/" className="nav__to-home">
                        <div className="nav__logo">WARIO ANKI</div>
                    </Link>
                    {/* <div className="nav__action--add"></div> */}
                </div>
            </nav>
        );
    }
}

export default Navbar;