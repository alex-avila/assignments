import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.props.onInputChange(name, value);
    }

    render() {
        return (
            <form className="form" onSubmit={this.props.handleSubmit}>
                <input 
                    name="firstName" 
                    type="text" 
                    value={this.props.badge.firstName} 
                    onChange={this.handleChange} 
                    placeholder="First name"/>
                <input 
                    name="lastName" 
                    type="text" 
                    value={this.props.badge.lastName} 
                    onChange={this.handleChange} 
                    placeholder="Last name"/>
                <input 
                    name="email" 
                    type="text" 
                    value={this.props.badge.email} 
                    onChange={this.handleChange} 
                    placeholder="Email"/>
                <input 
                    name="birthPlace" 
                    type="text" 
                    value={this.props.badge.birthPlace} 
                    onChange={this.handleChange} 
                    placeholder="Birth place"/>
                <input 
                    name="phone" 
                    type="text" 
                    value={this.props.badge.phone} 
                    onChange={this.handleChange} 
                    placeholder="Phone number"/>
                <input 
                    name="food" 
                    type="text" 
                    value={this.props.badge.food} 
                    onChange={this.handleChange} 
                    placeholder="Favorite food"/>
                <textarea 
                    name="info" 
                    type="text" value={this.props.badge.info} 
                    onChange={this.handleChange} 
                    placeholder="Information about yourself..."
                ></textarea>
                <button className={this.props.active ? 'activated' : 'deactivated'}>Submit</button>
            </form>
        )
    }
}

export default Form;