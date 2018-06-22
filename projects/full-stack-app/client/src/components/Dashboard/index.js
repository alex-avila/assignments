import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        const { nextReview, availableNow, nextDay } = this.props
        return (
            <div className="dashboard">
                <h2 className="utility-wrapper">Dashboard</h2>
                <div className="dashboard-wrapper utility-wrapper">
                    <div>
                        <span>{nextReview}</span>
                        <p>Next Review</p>
                    </div>
                    <div>
                        <span>{availableNow}</span>
                        <p>Available Now</p>
                    </div>
                    <div>
                        <span>{nextDay}</span>
                        <p>Next Day</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;