import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper content-wrap">
                <h1>Plumbing Company, Inc.</h1>
                <div className="nav__links">
                    <NavLink className="nav__link" activeClassName="selected" exact to="/">Home</NavLink>
                    <NavLink className="nav__link" activeClassName="selected" exact to="/about">About</NavLink>
                    <NavLink className="nav__link" activeClassName="selected" exact to="/services">Services</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;