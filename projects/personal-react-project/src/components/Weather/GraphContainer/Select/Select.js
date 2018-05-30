import React, { Component } from 'react';

import { connect } from 'react-redux'
import { toggleMode } from '../../../../redux'

import './Select.css'

class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMode: 'hourly'
        }
    }
    
    handleClick = mode => {
        if (mode !== this.state.currentMode) {
            this.setState({
                currentMode: mode
            })
            this.props.toggleMode()
        }
    }

    render() {
        const { currentMode } = this.state
        return (
            <div className="select__wrapper--outer">
                <div className="select__wrapper--inner">
                    <div className={currentMode === 'hourly' ? "select__selection selected" : "select__selection"} onClick={() => this.handleClick('hourly')}>
                        <span>Hourly</span>
                    </div>
                    <div className={currentMode === 'daily' ? "select__selection selected" : "select__selection"} onClick={() => this.handleClick('daily')}>
                        <span>Daily</span>
                    </div>
                </div>
            </div>
            // <select name="toggleMode" value={this.state.selectVal} onChange={this.handleChange}>
            //     <option value="hourly">hourly</option>
            //     <option value="daily">daily</option>
            // </select>
        );
    }
}

export default connect(null, { toggleMode })(Select)