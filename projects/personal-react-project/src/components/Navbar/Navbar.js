import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="nav__wrapper--outer">
                <div className="nav__wrapper--inner">
                    <div className="nav__links">
                        <NavLink exact to="/">Weather</NavLink>
                        <NavLink exact to="/News">News</NavLink>
                        <NavLink exact to="/Game">Game</NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;