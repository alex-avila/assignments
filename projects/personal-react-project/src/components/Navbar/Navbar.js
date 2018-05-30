import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink exact to="/">Weather</NavLink>
                    <NavLink exact to="/News">News</NavLink>
                    <NavLink exact to="/Game">Game</NavLink>
                </nav>
            </div>
        );
    }
}

export default Navbar;