import React from 'react'

import { Link } from 'react-router-dom'

import VotingSystem from './VotingSystem'

import commentIcon from '../icons/comment.svg'

const Issue = props => {
    const { title, content, votes, commentsCount, _id: id, updatedAt, createdAt } = props
    return (
        <Link to={`${id}`} className="issue__wrapper--outer">
            <div id={id} className="issue__wrapper--inner">
                <h3>{title}</h3>
                <p><small>{updatedAt ? new Date(updatedAt).toLocaleDateString() : createdAt}</small></p>
                <p>{content}</p>
                <div className="issue__interactions">
                    <div className="interactions__comments">
                        <img src={commentIcon} />
                        <span>{commentsCount}</span>
                    </div>
                    <VotingSystem votes={votes} id={id} />
                </div>
            </div>
        </Link>
    )
}

export default Issue