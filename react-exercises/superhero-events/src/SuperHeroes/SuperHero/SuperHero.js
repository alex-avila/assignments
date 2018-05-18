import React from 'react';
import './SuperHero.css';

class SuperHero extends React.Component {
    constructor(props) {
        super(props);

        this.image = props.image;
        this.alias = props.alias;
        this.speak = props.speak;
        this.catchphrase = props.catchphrase;

        this.background = {
            background: `url(${this.image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat'
        }
    }
    render() {
        return (
            <div className="hero-container" onClick={() => this.speak(this.catchphrase)}>
                <img className="image" src={this.image}/>
                <div>{this.alias}</div>
            </div>
        )
    }
}

export default SuperHero;