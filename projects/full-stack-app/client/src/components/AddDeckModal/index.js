import React, { Component } from 'react';

import { connect } from 'react-redux'
import { addDeck } from '../../redux/decksReducer'

import './AddDeckModal.css'
import Button from '../Button';

class AddDeckModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                name: '',
                description: ''
            }
        }
    }

    handleAdd = () => {
        this.props.addDeck(this.state.inputs)
        this.props.handleHideModal()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    render() {
        const { isModalOn } = this.props
        let modalClasses = "add-deck-modal"
        if (isModalOn) {
            modalClasses += " modal__show"
        }
        const { name, description } = this.state.inputs
        return (
            <div 
                id="background"
                className={modalClasses}
                onClick={this.props.handleHideModal}>
                <div className="add-deck-modal__wrapper">
                    <input 
                        name="name" 
                        value={name} 
                        type="text" 
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <textarea 
                        name="description" 
                        value={description} 
                        type="text"
                        placeholder="Describe this deck..."
                        onChange={this.handleChange}
                    />
                    <Button rounded onClick={this.handleAdd}>ADD DECK</Button>
                </div>
            </div>
        );
    }
}

export default connect(null, { addDeck })(AddDeckModal)