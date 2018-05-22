import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';
import axios from 'axios';

import './HitList.css'

class HitList extends Component {
    constructor() {
        super();
        this.state = {
            targets: []
        }
    }

    componentDidMount() {
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
            this.setState({targets: response.data})
        })
    }

    render() {
        const mappedTargets = this.state.targets.map((target, i) => {
            return (
                <ListItem
                    key={target.name + i}
                    name={target.name}
                    image={target.image}
                />
            )
        })
        return (
            <div className="hit-list">
                { mappedTargets }
            </div>
        );
    }
}

export default HitList;