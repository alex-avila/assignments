import React from 'react'
import Navbar from './Navbar/Navbar'

import './Header.css'

const Header = (props) => {
    const homeBackground = {
        background: 
            `linear-gradient(
                rgba(10, 10, 20, 0.45),
                rgba(10, 10, 20, 0.45)
            ),
            url(${props.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom 50% center',
        backgroundRepeat: 'no-repeat',
        filter: 'saturate(80%)'
    }
    return (
        <div className="header" style={homeBackground}>
            <Navbar />
            <div className="header__title">
                <h1>Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}

export default Header