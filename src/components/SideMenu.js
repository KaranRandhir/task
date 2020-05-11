import React from "react"
import "./nav1.css"

const SideMenu = ({width,onPress}) => {
    return (
        <div style={{width:`${width}`,overflowX:"hidden",transition:".3s"}}class="ui sidebar visible  vertical menu">
        
         
        
        <a  class="item">
          1
        </a>
        <a class="item">
          2
        </a>
        <a class="item">
          3
        </a>
      </div>
      
    )
}

export default SideMenu;