import React, { Component } from 'react';

import BountyForm from './BountyForm'

import './Form.css'

class FormContainer extends Component {
    render() {
        const { inputs, handleChange, handleSubmit, editing } = this.props
        return (
            <div className="form-wrapper">
                {/* <i className="material-icons form__back-btn">arrow_back_ios</i> */}
                <h2 className="form__title">Add New Bounty</h2>
                <BountyForm inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit} editing={editing}/>
            </div>
        );
    }
}

export default FormContainer;