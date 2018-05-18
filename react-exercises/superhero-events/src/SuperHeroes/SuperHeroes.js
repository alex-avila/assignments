import React from 'react';
import SuperHero from './SuperHero/SuperHero'

import './SuperHeroes.css';

class SuperHeroes extends React.Component {
    constructor(props) {
        super(props);
        this.heroes = props.heroes;
    }

    speak(catchphrase) {
        alert(catchphrase);
    }

    generateHeroes() {
        return this.heroes.map((hero, i) => {
            return (
                <SuperHero
                    key={hero + ' ' + i}
                    image={hero.image}
                    alias={hero.alias}
                    speak={this.speak}
                    catchphrase={hero.catchphrase}
                />
            )
        })
    }
    
    render() {
        return (
            <div className="wrapper">
                { this.generateHeroes() }
            </div>
        )
    }
}

export default SuperHeroes;