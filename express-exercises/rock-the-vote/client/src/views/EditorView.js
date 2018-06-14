import React, { Component } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'

import '../../node_modules/draft-js/dist/Draft.css'

class EditorView extends Component {
    constructor(props) {
        super(props)
        this.state = { editorState: EditorState.createEmpty() }
        this.onChange = (editorState) => this.setState({ editorState })
    }

    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            this.onChange(newState)
            return 'handled'
        }
        return 'not-handled'
    }

    _onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    render() {
        return (
            <div className="general-content-wrapper">
                <button onClick={this._onBoldClick}>Bold</button>
                <div className="editor">
                    <Editor
                        editorState={this.state.editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default EditorView