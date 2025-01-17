import React from "react"
import "./BlogCard.css"

import {Link} from "react-router-dom"

const BlogCard = (props) => {
    return (
        <div className="blog-card">
            <div className="blog-card__heading">  {props.title}</div>
          
            <div className="blog-card__content">
{props.content}
</div>
    <div className="blog-card__author">{props.date}</div>
            <div className="blog-card__button">
            <Link to={`/blog/${props.id}`}>
            <button style={{marginTop:".4rem"}} class="ui right blue button">
  Read More
</button>

</Link>
            </div>
        </div>
    )
}

export default BlogCard;