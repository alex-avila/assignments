import React from 'react'

import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar__wrapper--outer">
            <div className="navbar__wrapper--inner general-content-wrapper">
                <Link
                    to="/"
                >
                    HOME
                </Link>
            </div>
        </div>
    )
}

export default Navbar