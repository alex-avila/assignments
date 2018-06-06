import React, { Component } from 'react';

import BountyForm from './BountyForm'

class FormContainer extends Component {
    render() {
        const { inputs, handleChange, handleSubmit } = this.props
        return (
            <div>
                <BountyForm inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit}/>
            </div>
        );
    }
}

export default FormContainer;