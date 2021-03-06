import React, { Component } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { connect } from 'react-redux'
import { createIssue } from '../redux/issuesReducer'

class GoodEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            html: null,
            title: ''
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
            html: draftToHtml(convertToRaw(editorState.getCurrentContent()))
        });
    };

    handleClick = () => {
        this.props.createIssue({title: this.state.title, content: this.state.html})
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        console.log(this.state.html)
        const { editorState } = this.state
        return (
            <div className="general-content-wrapper">
                <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
                <button onClick={this.handleClick}>POST</button>
            </div>
        );
    }
}

export default connect(null, { createIssue })(GoodEditor)