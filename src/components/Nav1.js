import React from "react"
import "./nav1.css"
import crane from "../assets/crane.png"
import { Link } from "react-router-dom"

const Nav1 = () => {
    return (
        <div class="ui borderless  menu">
        <div class="header item company">
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
       
      
        <div class="ui simple dropdown item light">
    Services.
   
    <div class="menu">
      <div class="item">Frieght Forwarding</div>
      <div class="item">Custom Clearance</div>
      <div class="item">Insurance</div>
    </div>
    </div>
    <div class="ui simple dropdown item light">
    Tools.
   
    <div class="menu">
      <div class="item">Shipping Documents</div>
      <div class="item">Container Tracking</div>
     </div>
    </div>
    <div class="ui simple dropdown item light">
    Calculator.
   
    <div class="menu">
      <Link to="/dutycalculator" class="item">Duty Calculator</Link>
      <Link to="/cbm" class="item">CBM Calculator</Link>
      
    </div>
    </div>
    <div class="ui simple dropdown item light">
    Others.
   
    <div class="menu">
      <Link  class="item" to="/blog">Blog</Link>
      <div class="item">Education</div>
      <div class="item">Privacy</div>
      <div class="item">Terms</div>
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