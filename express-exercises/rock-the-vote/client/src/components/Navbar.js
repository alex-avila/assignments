import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink 
                exact 
                to="/"
                activeStyle={{
                    fontWeight: 'bold',
                    color: 'darkgray'
                }}
            >
            HOME
            </NavLink>
        </div>
    )
}

export default Navbar