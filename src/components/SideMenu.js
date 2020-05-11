import React from "react"
import "./nav1.css"

const SideMenu = ({width}) => {
    return (
        <div style={{width:`${width}`,overflowX:"hidden",transition:".3s"}}class="ui sidebar visible  vertical menu">
        
         
        
        <a  class="item">
          Log in/Sign up
        </a>
        <a class="item">
          Home
        </a>
        <a class="item">
          Products
        </a>
        <a class="item">
          Tools
        </a>
        <a class="item">
          Support
        </a>

      </div>
      
    )
}

export default SideMenu;