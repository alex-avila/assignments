import React, { Component } from 'react';

import './GameTable.css'

class GameTable extends Component {
    constructor() {
        super()
        this.state = {
            boxes: {
                topL: '',
                topM: '',
                topR: '',
                midL: '',
                midM: '',
                midR: '',
                botL: '',
                botM: '',
                botR: ''
            }
        }
        this.boxesArr = [] // generated in generateBoxes()
    }

    componentDidMount = () => {
        // randomize who starts
    }

    handleClick = e => {
        // color the elem that I click
        e.target.style.background = 'lightblue'
        const { id } = e.target
        this.setState(prevState => ({
            boxes: {
                ...prevState.boxes,
                [id]: 'x'
            }
        }))
        // this.computerMove()
    }

    computerMove = () => {
        // To start, choose a random box and color it palevioletred
        // this.boxesArr[Math.floor(Math.random() * 9)].style.background = 'palevioletred'
    }

    generateBoxes = () => {
        const generatedBoxes = []
        const prefixes = ['top', 'mid', 'bot']
        const suffixes = ['L', 'M', 'R']
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const idName = prefixes[i] + suffixes[j]
                this.boxesArr.push(idName)
                const box = <li id={idName} onClick={this.handleClick}></li>
                generatedBoxes.push(box)
            }
        }
        return generatedBoxes
    }

    render() {
        return (
            <ul className="grid">
                {this.generateBoxes()}
            </ul>
        );
    }
}

export default GameTable;