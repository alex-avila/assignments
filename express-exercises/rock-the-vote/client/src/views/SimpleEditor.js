import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createIssue } from '../redux/issuesReducer'

import './Editor.css'

class SimpleEditor extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleClick = () => {
        this.props.createIssue(this.state)
        this.setState({
            title: '',
            content: ''
        })
    }

    render() {
        return (
            <div className="simple-editor general-content-wrapper">
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title} 
                    onChange={this.handleChange} 
                    placeholder="Title"
                    autoComplete="off" 
                />
                <textarea 
                    type="text" 
                    name="content" 
                    value={this.state.content} 
                    onChange={this.handleChange} 
                    placeholder="Content" 
                    autoComplete="off"
                >
                </textarea>
                <button onClick={this.handleClick}>POST</button>
            </div>
        )
    }
}

export default connect(null, { createIssue })(SimpleEditor)