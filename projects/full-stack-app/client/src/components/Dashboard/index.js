import React, { Component } from 'react'
import moment from 'moment'

import './index.css'
import ProgressBar from '../ProgressBar';

class Dashboard extends Component {
    render() {
        const { inQueue: { len: availableNow }, cards } = this.props
        let nextDay = 0
        let nextReview = Math.pow(10, 1000)
        let percentage = 0
        let momentDate = 'never'
        if (cards.length) {
            nextDay = cards.filter(card => {
                const cardDate = new Date(card.availableDate).getDate()
                const tomorrowDate = new Date(new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 1)).getDate()
                return cardDate >= tomorrowDate
            })
            nextDay = nextDay.length
            nextReview = cards.sort((a, b) => {
                return new Date(a.availableDate).getDate() - new Date(b.availableDate).getDate()
            })
            nextReview = nextReview[0].availableDate
            momentDate = moment(nextReview).fromNow()
            const seen = this.props.cards.reduce((final, card) => {
                return card.hasBeenSeen ? final + 1 : final
            }, 0)
            percentage = (seen / this.props.cards.length) * 100
        }
        return (
            <div className="dashboard">
                <h3>Dashboard</h3>
                <div className="dashboard__wrapper">
                    <div>
                        <span>
                            {
                                new Date(nextReview) > Date.now() || !cards.length ?
                                    momentDate.slice(0, 1).toUpperCase() + momentDate.slice(1) :
                                    'Available Now'
                            }
                        </span>
                        <p>Next Review</p>
                    </div>
                    <div>
                        <span>{availableNow ? availableNow : 0}</span>
                        <p>Available Now</p>
                    </div>
                    <div>
                        <span>{nextDay ? nextDay : 0}</span>
                        <p>Next Day</p>
                    </div>
                </div>
                <h4>
                    Percentage of cards studied <small>({percentage !== 0 && percentage < 1 ?
                        '<1' : Math.round(percentage)}%)</small>
                </h4>
                <ProgressBar percentage={percentage} />
            </div>
        );
    }
}

export default Dashboard;