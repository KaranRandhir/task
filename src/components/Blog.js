import React from "react";
import blog from "../assets/blog.png";
import "./Blog.css";
import {Fade} from "react-reveal"
import Footer from "./Footer"
import BlogCard from "./BlogCard"
import wp from "../api/wp"
import parse from "html-react-parser"

class Blog extends React.Component {
  state={posts:[]}
  
 async componentDidMount() {
    const response = await wp.get("/posts")
    this.setState({posts:response.data})
 }


render () {
    console.log(this.state.posts)
    return (
      <>
    <div className="blog">
      <div className="blog-landing">
            <Fade left>      
          <img
           
            className="blog-img"
            alt="blog"
            src={blog}
          />
          </Fade>
       <Fade right>
        <div className="blog-heading">
          <div> Blog</div>
          <div className="blog-heading__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Nullam quis molestie augue. 
           Suspendisse faucibus, orci eu lobortis porttitor, mi dui ornare turpis, at eleifend ipsum mi nec leo
           . Aenean condimentum nisi nec diam tristique iaculis. 
          Praesent et laoreet orci. Aliquam scelerisque eget est ac aliquet.
          </div>
        </div>
        </Fade>
      </div>
      
      <div style={{marginTop:"2rem"}} class="ui divider"></div>
      <div className="blog-cards">
    
        {this.state.posts.map(item => <BlogCard 
        title={item.title.rendered} 
        content={parse(item.excerpt.rendered)}
        date={item.modified.substr(0,10)}/>)}
         
    
         
    
    </div>

    </div>
    <Footer/>
    </>
  );}
};

export default Blog;
