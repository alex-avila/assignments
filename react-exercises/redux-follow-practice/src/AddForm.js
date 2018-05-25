import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addPidgeon } from './redux'

class AddForm extends Component {
    // create state
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                nickname: '',
                imgUrl: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handlechange and handlesubmit
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPidgeon(this.state.inputs)
    }
    // make a addform() action
    // connect action creators to the form
    render() {
        const {inputs: {nickname, imgUrl}} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="nickname" 
                    value={nickname} 
                    type="text" 
                    onChange={this.handleChange} 
                    placeholder="Enter Nickname" 
                />
                <input 
                    name="imgUrl" 
                    value={imgUrl} 
                    type="text" 
                    onChange={this.handleChange} 
                    placeholder="Image Url" 
                />
                <button>Submit</button>
            </form>
        )
    }
}

// null because we don't care to have access to the state from redux
export default connect(null, { addPidgeon })(AddForm)