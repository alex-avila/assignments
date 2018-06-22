import React, { Component } from 'react';

import { connect } from 'react-redux'
import { uploadCSV } from '../../redux/decksReducer'

import Button from '../Button'
import Dropzone from 'react-dropzone'

import './UploadModal.css'

class UploadModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            inputs: {
                name: '',
                description: ''
            },
        }
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

    onDrop = files => {
        this.setState({ file: files[0] })
    }

    handleUpload = () => {
        const data = new FormData()
        data.append('file', this.state.file)
        data.append('name', this.state.inputs.name)
        data.append('description', this.state.inputs.description)
        this.props.uploadCSV(data)
    }

    render() {
        const { isModalOn, handleHideModal } = this.props
        let modalClasses = "upload-deck-modal"
        if (isModalOn) {
            modalClasses += " modal__show"
        }
        return (
            <div
                id="background"
                className={modalClasses}
                onClick={handleHideModal}
            >
                <div className="upload-deck-modal__wrapper">
                    <Dropzone className="dropzone" onDrop={this.onDrop}>
                        <div>Drag &amp; Drop</div>
                        <div><small>(or click to select a file)</small></div>
                    </Dropzone>
                    <input
                        name="name"
                        type="text" 
                        placeholder="name"
                        onChange={this.handleChange}
                        value={this.state.inputs.name}
                        autoComplete="off"
                    />
                    <input
                        name="description"
                        type="text" 
                        placeholder="description"
                        onChange={this.handleChange}
                        value={this.state.inputs.description}
                        autoComplete="off"
                    />
                    <Button rounded onClick={this.handleUpload}>UPLOAD DECK</Button>
                </div>
            </div>
        );
    }
}

export default connect(null, { uploadCSV })(UploadModal)