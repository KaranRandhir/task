import React from "react"
import "./nav1.css"
import crane from "../assets/crane.png"
import { BrowserRouter as Router,Route,Link } from "react-router-dom"

const Nav1 = () => {
    return (
        <div class="ui borderless  menu">
        <div class="header item company">
        <div style={{display:"flex"}}>
        <img src={crane} className="crane"/>
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
        <a className="item light">
      
      <Link style={{color:"black",height:"100%",paddingTop:"40%"}} to="/">
       Home.
       </Link>
     </a>
        <a className="item light">
      
         <Link style={{color:"black",height:"100%",paddingTop:"40%"}} to="/about">
          About.
          </Link>
        </a>
      
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
      <div class="item">Duty Calculator</div>
      <div class="item">CBM Calculator</div>
      
    </div>
    </div>
    <div class="ui simple dropdown item light">
    Others.
   
    <div class="menu">
      <div class="item">Blog</div>
      <div class="item">Education</div>
      <div class="item">Privacy</div>
      <div class="item">Terms</div>
    </div>
    </div>
      
        <a className="item login light">
          Log in/Sign up.
        </a>
      </div>
      </div>
    )
}

export default Nav1;