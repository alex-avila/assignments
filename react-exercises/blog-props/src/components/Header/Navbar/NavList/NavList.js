import React from 'react';

import './NavList.css'

const NavList = (props) => {
    return (
        <div className={`nav__list ${props.isScreenBig ? 'row' : 'column'}`}>
            <div className="nav__item">HOME</div>
            <div className="nav__item">ABOUT</div>
            <div className="nav__item">SAMPLE POST</div>
            <div className="nav__item">CONTACT</div>
        </div>
    )
}

export default NavList;