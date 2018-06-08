import React, { Component } from 'react'

class BountyForm extends Component {
    render() {
        const { handleChange, handleSubmit, inputs, editing } = this.props
        return (
            <form className="form" onSubmit={handleSubmit}>
                <h3>General Information</h3>
                <input
                    onChange={handleChange}
                    name="firstName"
                    value={inputs.firstName}
                    type="text"
                    placeholder="First Name"
                    required
                    autoComplete="off"
                />
                <input
                    onChange={handleChange}
                    name="lastName"
                    value={inputs.lastName}
                    type="text"
                    placeholder="Last Name"
                    autoComplete="off"
                />
                <input
                    onChange={handleChange}
                    name="bountyAmount"
                    value={inputs.bountyAmount}
                    type="number"
                    placeholder="Bounty Amount"
                    required
                    autoComplete="off"
                />
                <h3>Alive or Dead</h3>
                <div className="form__toggle-life">
                    <p>Alive</p>
                    <label className="form__switch">
                        <input
                            onChange={handleChange}
                            name="living"
                            checked={inputs.living}
                            type="checkbox"
                        />
                        <span className="form__slider"></span>
                    </label>
                </div>
                <div className="form__affiliation">
                    <h3>Affiliation</h3>
                    <label>
                        <div className="form__radio-wrapper">
                            <input
                                onChange={handleChange}
                                name="type"
                                value="Jedi"
                                type="radio"
                                checked={inputs.type === 'Jedi'}
                            />
                            <span className="form__radio"></span>
                        </div>
                        <span className="radio-text">Jedi</span>
                    </label>
                    <label>
                        <div className="form__radio-wrapper">
                            <input
                                onChange={handleChange}
                                name="type"
                                value="Sith"
                                type="radio"
                                checked={inputs.type === 'Sith'}
                            />
                            <span className="form__radio"></span>
                        </div>
                        <span className="radio-text">Sith</span>
                    </label>
                    <label>
                        <div className="form__radio-wrapper">
                            <input
                                onChange={handleChange}
                                name="type"
                                value=""
                                type="radio"
                                checked={!inputs.type}
                            />
                            <span className="form__radio"></span>
                        </div>
                        <span className="radio-text">Other</span>
                    </label>
                </div>
                <button>{editing ? 'UPDATE ' : 'ADD '}IT</button>
            </form>
        );
    }
}

export default BountyForm