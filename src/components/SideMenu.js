import React from "react"
import "./nav1.css"
import { Link } from "react-router-dom";

const SideMenu = ({width}) => {
    return (
        <div style={{width:`${width}`,overflowX:"hidden",transition:".3s",zIndex:"1000"}}class="ui sidebar visible  vertical menu">
        
         
        
        <a  style={{fontSize:"1.5rem"}}class="item">
          Log in
        </a>
        <Link to="/"style={{fontSize:"1.5rem"}} class="item">
          Home
        </Link>
        <Link to="/about"style={{fontSize:"1.5rem"}} class="item">
          About
        </Link>
        <a style={{fontSize:"1.5rem"}} class="item">
          Services
        </a>
        <a style={{fontSize:"1.5rem"}} class="item">
          Tools
        </a>
        <a style={{fontSize:"1.5rem"}} class="item">
          Calculators
        </a>
        <a style={{fontSize:"1.5rem"}} class="item">
          Others
        </a>


      </div>
      
    )
}

export default SideMenu;