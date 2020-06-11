import React from "react"
import "./nav1.css"
import crane from "../assets/crane.png"
import { Link } from "react-router-dom"

const Nav1 = () => {
    return (
        <div className="ui borderless  menu">
        <div className="header item company">
        <div style={{display:"flex"}}>
        <img src={crane} className="crane" alt="crane"/>
          <div style={{marginLeft:".5vw"}}>
          <div className="title">
          IndiaPort<br/>
          </div>
          <div className="tagline">
          Simplifying Boundaries
          </div>
          </div>
          </div>
        </div>
        <div className="menu right"> 
      
      <Link  className="item light"to="/">
       Home.
       </Link>
       <Link  className="item light"to="/about">
       About.
       </Link>
       
      
        <div className="ui simple dropdown item light">
    Services.
   
    <div className="menu">
      <div className="item">Frieght Forwarding</div>
      <div className="item">Custom Clearance</div>
      <div className="item">Insurance</div>
    </div>
    </div>
    <div className="ui simple dropdown item light">
    Tools.
   
    <div className="menu">
      <div className="item">Shipping Documents</div>
      <div className="item">Container Tracking</div>
     </div>
    </div>
    <div className="ui simple dropdown item light">
    Calculator.
   
    <div className="menu">
      <Link to="/dutycalculator" class="item">Duty Calculator</Link>
      <Link to="/cbm" class="item">CBM Calculator</Link>
      
    </div>
    </div>
    <div className="ui simple dropdown item light">
    Others.
   
    <div class="menu">
      <Link  className="item" to="/blog">Blog</Link>
      <div className="item">Education</div>
      <div className="item">Privacy</div>
      <div className="item">Terms</div>
    </div>
    </div>
      
        <a href="http://indiaport.in/admin/login.php" className="item login light">
          Log in/Signup.
        </a>
      </div>
      </div>
    )
}

export default Nav1;