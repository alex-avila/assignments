import React from 'react'

import Comment from './Comment'

const Comments = ({comments}) => {
    const mappedComments = comments.map(comment =>
        <Comment key={comment._id} {...comment}/>
    )
    return (
        <section>
            <h4>Comments</h4>
            <div>
                {mappedComments}
            </div>
        </section>
    )
}

export default Comments