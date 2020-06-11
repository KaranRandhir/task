import React from "react"
import "./nav1.css"
import { Link } from "react-router-dom";

const SideMenu = ({width},props) => {
    return (
        <div style={{width:`${width}`,overflowX:"hidden",transition:".3s",zIndex:"1000"}}class="ui sidebar visible  vertical menu">
        
         
        
        <a href="http://indiaport.in/admin/login.php" style={{fontSize:"1.5rem"}}class="item">
          Log in
        </a>
        <Link to="/"style={{fontSize:"1.5rem"}} class="item">
          Home
        </Link>
        <Link to="/about"style={{fontSize:"1.5rem"}} class="item">
          About
        </Link>
        <div style={{fontSize:"1.5rem"}} class="item">
          Services
        </div>
        <div style={{fontSize:"1.5rem"}} class="item">
          Tools
        </div>
        
        <Link to="/cbm"style={{fontSize:"1.5rem"}} class="item">
          Cbm Calculator
        </Link>
        <Link to="/dutycalculator"style={{fontSize:"1.5rem"}} class="item">
          Duty Calculator
        </Link>
        <Link to="/blog"style={{fontSize:"1.5rem"}} class="item">
          Blog
        </Link>
        <div style={{fontSize:"1.5rem"}} class="item">
          Others
        </div>


      </div>
      
    )
}

export default SideMenu;