import React from 'react'
import BlogPost from './BlogPost/BlogPost'

import './BlogList.css'

const BlogList = (props) => {
    const mappedBlogPosts = props.blogData.map((blog, i) => {
        return (
            <BlogPost
                key={blog.title + i}
                title={blog.title}
                subtitle={blog.subtitle ? blog.subtitle : null}
                publisher={blog.publisher}
                date={blog.date}
            />
        )
    })
    return (
        <div className="blog-list">
            { mappedBlogPosts }
            <div className="blog__prev-btn">Older Posts →</div>
        </div>
    )
}

export default BlogList