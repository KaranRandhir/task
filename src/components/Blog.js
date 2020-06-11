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
          Find everything related to international trade, government policies and logistics in our blog. 
          Browse through interesting articles on export incentives, 
          the digitalization of the logistics industry and new ways to grow your business.
          </div>
        </div>
        </Fade>
      </div>
      
      <div style={{marginTop:"2rem"}} class="ui divider"></div>
      <div className="blog-cards">
    
        {this.state.posts.map(item => <BlogCard 
        id={item.id}
        key={item.id}
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
