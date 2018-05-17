import React from 'react'
import './Navbar.css'

const menuBreakpoint = 992;

class Navbar extends React.Component {
    constructor(props) {
        super(props);
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
            isScreenBig: window.innerWidth >= menuBreakpoint ? true : false
        }));
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <nav>
                <div className="nav__wrapper">
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
                        <div className="nav__list">
                            <div className="nav__item">HOME</div>
                            <div className="nav__item">ABOUT</div>
                            <div className="nav__item">SAMPLE POST</div>
                            <div className="nav__item">CONTACT</div>
                        </div>
                    }
                </div>
            </nav>
        );
    }
}

export default Navbar