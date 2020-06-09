import React from "react"

const BlogPage = (props) =>  {
    return (
        <div className="blog-page">
            <div className="blog-page__title">{props.title}</div>
    <div className="blog-page__content">{props.content}</div>
        </div>
    )
}

export default BlogPage