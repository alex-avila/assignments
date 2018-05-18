import React from 'react'
import './Navbar.css'

import NavList from './NavList/NavList'

const menuBreakpoint = 992;

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggleOn: false,
            isScreenBig: false
        };

        // This binding is necessary to make 'this' work in the callback
        this.toggleNavItems = this.toggleNavItems.bind(this);
        this.handleResize = this.handleResize.bind(this);
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

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        this.handleResize();
        window.addEventListener('resize', null);
    }

    render() {
        let navWrapperClass = 'nav__wrapper';
        if (this.state.isScreenBig) {
            navWrapperClass += ' nav__wrapper__flex';
        }
        return (
            <nav>
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