import React, { Component } from 'react';

import './index.css'

class ProgressBar extends Component {
    render() {
        let { percentage } = this.props
        percentage =  !isNaN(percentage) ? percentage : 0
        return (
            <div className="progress-bar">
                <div className="progress-bar__wrapper">
                    <div style={{ width: `${percentage}%` }} className="progress-bar__progression"></div>
                </div>
            </div>
        );
    }
}

export default ProgressBar;