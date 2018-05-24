import React from 'react';

import './Badge.css';

class Badge extends React.Component {
    render() {
        return (
            <div className="badge" style={{borderTop: `3px solid ${this.props.color}`}}>
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
                <p>{this.props.email}</p>
                <p>{this.props.birthPlace}</p>
                <p>{this.props.phone}</p>
                <p>{this.props.food}</p>
                <p>{this.props.info}</p>
            </div>
        )
    }
}

export default Badge;