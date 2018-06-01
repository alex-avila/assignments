import React, { Component } from 'react';

import './NewsNavbar.css'

class NewsNavbar extends Component {
    render() {
        return (
            <nav className="news__nav">
                <div className="news__nav__link nav__selected">Top Headlines</div>
                <div className="news__nav__link">Technology</div>
                <div className="news__nav__link">Science</div>
                <div className="news__nav__link">Entertainment</div>
            </nav>
        );
    }
}

export default NewsNavbar;