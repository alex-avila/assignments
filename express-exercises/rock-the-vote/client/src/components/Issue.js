import React from 'react'

import { Link } from 'react-router-dom'

const Issue = props => {
    const { title, content, votes, commentsCount, _id: id, updatedAt, createdAt } = props
    return (
        <Link to={`${id}`}>
            <div id={id}>
                <h3>{title}</h3>
                <p>{updatedAt ? updatedAt : createdAt}</p>
                <p>{content}</p>
                <div>
                    <span>Comments </span>
                    <span>{commentsCount}</span>
                </div>
                <div>
                    <span>Upvotes </span>
                    <span>{votes}</span>
                </div>
            </div>
        </Link>
    )
}

export default Issue