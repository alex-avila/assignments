import React from 'react'

import './BlogPost.css'

const BlogPost = (props) => {
    return (
        <div className="blog-post">
            <a>
                <h2>{props.title}</h2>
                {props.subtitle && <h3>{props.subtitle}</h3>}
            </a>
            <p>Poster by <span className="blog__publisher">{props.publisher}</span> on {props.date}</p>
            <span className="blog__divider"></span>
        </div>
    )
}

export default BlogPost