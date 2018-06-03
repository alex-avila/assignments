import React, { Component } from 'react'

import ai from './ai2'

import './Game.css'


class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [],
            boxes: {
                topL: null, topM: null, topR: null,
                midL: null, midM: null, midR: null,
                botL: null, botM: null, botR: null,
            },
            playerIsNext: true,
            winner: null
        }
        this.availableBoxes = []
        this.endGame = false
    }

    componentDidMount = () => {
        this.setState({ board: this.createBoard() })
        this.findAvailableBoxes()
    }

    playerMove = box => {
        if (this.endGame) { return }
        if (this.availableBoxes.indexOf(box) !== -1 && this.state.playerIsNext) {
            this.setState({
                boxes: { ...this.state.boxes, [box]: 'x' }
            },
                () => {
                    this.checkWinConditions(this.state.boxes, false)
                    this.setState({ playerIsNext: !this.state.playerIsNext })
                    this.findAvailableBoxes()
                    setTimeout(() => this.computerMove(), 333)
                }
            )
        }
    }

    computerMove = () => {
        if (this.endGame) { return }
        const { availableBoxes, state: { boxes } } = this
        console.log(ai.minimax(boxes, availableBoxes, true))
        const moveScores = ai.mathMaxMin(ai.minimax(boxes, availableBoxes, true))
        console.log(moveScores)
        let max = moveScores[0]
        let selection = 0
        for (let i = 0; i < moveScores.length; i++) {
            if (moveScores > max) {
                max = moveScores[i]
                selection = i
            }
        }
        // const winningMove = ai.getBestMove(boxes, 'o', availableBoxes)
        // const randomSelection = Math.floor(Math.random() * availableBoxes.length)
        // const selection = winningMove ? winningMove : availableBoxes[randomSelection]
        this.setState({
            boxes: {
                ...boxes,
                [availableBoxes[selection]]: 'o'
            }
        },
            () => {
                this.setState({ playerIsNext: !this.state.playerIsNext })
                this.checkWinConditions(this.state.boxes, false)
                this.findAvailableBoxes()
            }
        )
    }

    createBoard = () => {
        const prefixes = ['top', 'mid', 'bot'], suffixes = ['L', 'M', 'R']
        return prefixes.map(prefix => {
            return suffixes.map(suffix => {
                const data = prefix + suffix
                const className = `${prefix} ${suffix} board__box`
                return (
                    <div
                        key={data}
                        className={className}
                        onClick={() => this.playerMove(data)}
                    >
                        {this.state.boxes[data]}
                    </div>
                )
            })
        })
    }

    findAvailableBoxes = () => {
        this.availableBoxes = []
        const { boxes } = this.state
        for (let box in boxes) {
            if (!boxes[box]) {
                this.availableBoxes.push(box)
            }
        }
    }

    checkWinConditions = (boxes, justChecking = false) => {
        const winConditions = [
            ['topL', 'topM', 'topR'],
            ['midL', 'midM', 'midR'],
            ['botL', 'botM', 'botR'],
            ['topL', 'midM', 'botR'],
            ['topR', 'midM', 'botL'],
            ['topL', 'midL', 'botL'],
            ['topM', 'midM', 'botM'],
            ['topR', 'midR', 'botR'],
        ]
        // check win conditions
        for (let i = 0; i < winConditions.length; i++) {
            let [a, b, c] = winConditions[i]
            if (justChecking) {
                if (boxes[a] === 'o' && boxes[b] === 'o' && boxes[c] === 'o') {
                    return true
                }
            } else if (boxes[a] === 'x' && boxes[b] === 'x' && boxes[c] === 'x') {
                this.win('X')
            } else if (boxes[a] === 'o' && boxes[b] === 'o' && boxes[c] === 'o') {
                this.win('O')
            }
        }
    }

    win = winner => {
        this.endGame = true
        this.setState({ winner })
    }

    render = () => {
        const { winner } = this.state
        return (
            <div className="game-container">
                <div className="game__board">
                    {this.createBoard()}
                </div>
                {winner ? <h1 className="game__winner">Winner: {winner}</h1> : null}
            </div>
        )
    }
}

export default Game