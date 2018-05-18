import React from 'react';
import SuperHeroes from './SuperHeroes/SuperHeroes';

import {superheroes} from './superheroes.json';

import './App.css'

class App extends React.Component {
    render() {
        return (
            <SuperHeroes heroes={superheroes}/>
        )
    }
}

export default App;