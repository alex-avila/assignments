import React from 'react'
import './Navbar.css'

import NavList from './NavList/NavList'

const menuBreakpoint = 992;

const navStyles = {
    small: {
        background: 'rgba(255, 255, 255, 1)',
        color: 'black',
        position: 'absolute'
    },
    large: {
        background: 'rgba(255, 255, 255, 0)',
        color: 'white',
        position: 'absolute'
    },
    largeTransluscent: {
        background: 'rgba(255, 255, 255, 0.9)',
        color: 'black',
        position: 'fixed',
        animation: 'slideIn 0.5s'
        // top: 0
    }
}

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggleOn: false,
            isScreenBig: false,
            scrolledUp: false,
            positionY: 0
        };

        // This binding is necessary to make 'this' work in the callback
        this.toggleNavItems = this.toggleNavItems.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    toggleNavItems() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    
    handleResize() {
        this.setState(prevState => ({
            isScreenBig: window.innerWidth >= menuBreakpoint ? true : false,
            isToggleOn: window.innerWidth >= menuBreakpoint ? false : prevState.isToggleOn
        }));
    }

    handleScroll() {
        this.setState(prevState => ({
            scrolledUp: window.scrollY < prevState.positionY,
            positionY: window.scrollY
        }));
        // console.log(this.state.scrolledUp)
        // console.log(this.state.positionY)
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        this.handleResize();
        window.addEventListener('resize', null);
        window.addEventListener('scroll', null);
    }


    render() {
        let navWrapperClass = 'nav__wrapper';
        if (this.state.isScreenBig) {
            navWrapperClass += ' nav__wrapper__flex';
        }
        // Right here determine how navbar should render
        let passToNav = navStyles.large;
        if (!this.state.isScreenBig && this.state.isToggleOn) {
            passToNav = navStyles.small
        } else if (this.state.isScreenBig && this.state.scrolledUp) {
            passToNav = navStyles.largeTransluscent
        }
        if (window.scrollY === 0) {
            passToNav = navStyles.large
        }
        return (
            <nav style={passToNav}>
                <div className={navWrapperClass}>
                    <div className="nav__with-button">
                        <h1>Start Bootstrap</h1>
                        {
                            !this.state.isScreenBig &&
                            <div className="button" onClick={this.toggleNavItems}>
                                <span className="button__text">MENU</span>
                                <span className="button__icon"></span>
                            </div>
                        }
                    </div>
                    {
                        (this.state.isToggleOn || this.state.isScreenBig) &&
                        <NavList isScreenBig={this.state.isScreenBig}/>
                    }
                </div>
            </nav>
        );
    }
}

export default Navbar