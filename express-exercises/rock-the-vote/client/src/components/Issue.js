import React from 'react'

const Issue = props => {
    // add votes
    const { title, content } = props
    return (
        <div>
            {/* add votes */}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Issue