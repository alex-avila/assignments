import React, { Component } from 'react'
import moment from 'moment'

import './index.css'

class Dashboard extends Component {
    render() {
        const { inQueue: { len: availableNow }, cards } = this.props
        let nextDay = cards.filter(card => {
            const cardDate = new Date(card.availableDate).getDate()
            const tomorrowDate = new Date(new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 1)).getDate()
            return cardDate >= tomorrowDate
        })
        nextDay = nextDay.length
        let nextReview = cards.sort((a, b) => {
            return new Date(a.availableDate).getDate() - new Date(b.availableDate).getDate()
        })
        nextReview = nextReview[0].availableDate
        const momentDate = moment(nextReview).fromNow()
        console.log(new Date(nextReview))
        console.log(Date.now())
        return (
            <div className="dashboard">
                <h3>Dashboard</h3>
                <div className="dashboard__wrapper">
                    <div>
                        <span>
                            {
                                new Date(nextReview) > Date.now() ?
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
            </div>
        );
    }
}

export default Dashboard;