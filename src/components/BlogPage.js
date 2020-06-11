import React from "react"

import "./BlogPage.css"
import wp from "../api/wp"
import parse from "html-react-parser"
class BlogPage extends React.Component {
    
    state = {blog:[]}
    
    async componentDidMount() {
        const id=this.props.match.params.id
        const response=await wp.get(`/posts/${id}/?_embed`)
        this.setState({blog:response.data})
    }
    
    render() {
        console.log(this.state.blog)
        if(this.state.blog.length===0){
            return(
                <div className="ui active inverted dimmer">
    <div className="ui text loader">Loading</div>
  </div>
 
            )
        }
    return (
        <div className="blog-page">
            
            <div className="blog-page__title">{this.state.blog.title.rendered}</div>
            <div className="blog-page__author">
    <div> By: {" " +this.state.blog._embedded.author[0].name}</div>
    <div>{this.state.blog.modified.substr(0,10)}</div>
            </div>
    <div className="blog-page__content">{parse(this.state.blog.content.rendered)}</div>
        </div>
    )}
}

export default BlogPage