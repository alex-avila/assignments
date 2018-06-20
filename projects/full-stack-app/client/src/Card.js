import React, { Component } from 'react';

import './Card.css'

class Card extends Component {
    render() {
        const { question, answer, handleFlip, isCardFlipped } = this.props
        return (
            <div className="card__wrapper">
                <div className={isCardFlipped ? "card flipped" : "card"} onClick={handleFlip}>
                    <div className="card__side card__back">{question}</div>
                    <div className="card__side card__front">{answer}</div>
                </div>
            </div>
        );
    }
}

export default Card;