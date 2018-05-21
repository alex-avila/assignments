import React from 'react'
import NavList from './NavList/NavList'
import Transition from 'react-transition-group/Transition';

import './Navbar.css'

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
    }
}

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggleOn: false,
            isScreenBig: false,
            scrolledUp: false,
            positionY: 0,
            in: true
        };

        // This binding is necessary to make 'this' work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleClick() {
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
        window.removeEventListener('resize', null);
        window.removeEventListener('scroll', null);
    }

    // Determine how navbar should render
    determinNavView() {
        if (window.scrollY === 0 && this.state.isScreenBig) {
            return navStyles.large
        }
        if (!this.state.isScreenBig) {
            return navStyles.small
        } else if (this.state.isScreenBig && this.state.scrolledUp) {
            return navStyles.largeTransluscent
        } else {
            return navStyles.large
        }
    }

    toggleEnteredState() {
        this.setState(prevState => ({
            in: !prevState.in
        }))
    }

    render() {
        let navWrapperClass = this.state.isScreenBig ?
            'nav__wrapper nav__wrapper__flex' : 'nav__wrapper';
        return (
            <Transition in={this.state.entered} timeout={500}>
                {(state) =>(
                    <nav style={this.determinNavView()}>
                        <div className={navWrapperClass}>
                            <div className="nav__with-button">
                                <h1>Start Bootstrap</h1>
                                {
                                    !this.state.isScreenBig &&
                                    <div className="button" onClick={this.handleClick}>
                                        <span className="button__text">MENU</span>
                                        <span className="button__icon"></span>
                                    </div>
                                }
                            </div>
                            {
                                (this.state.isToggleOn || this.state.isScreenBig) &&
                                <NavList isScreenBig={this.state.isScreenBig} />
                            }
                        </div>
                    </nav>
                )}
            </Transition>
        );
    }
}

export default Navbar
