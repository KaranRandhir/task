import React from "react"
import "./nav1.css"

const SideMenu = ({width}) => {
    return (
        <div style={{width:`${width}`,overflowX:"hidden",transition:".3s"}}class="ui sidebar visible  vertical menu">
        
         
        
        <a  style={{fontSize:"1.5rem"}}class="item">
          Log in/Sign up
        </a>
        <a style={{fontSize:"1.5rem"}} class="item">
          Home
        </a>
        <a style={{fontSize:"1.5rem"}} class="item">
          Products
        </a>
        <a style={{fontSize:"1.5rem"}} class="item">
          Tools
        </a>
        <a style={{fontSize:"1.5rem"}} class="item">
          Support
        </a>

      </div>
      
    )
}

export default SideMenu;