import React from "react"
import "./nav1.css"

const SideMenu = ({width,onPress}) => {
    return (
        <div style={{width:`${width}`,overflowX:"hidden",transition:".3s"}}class="ui sidebar visible vertical menu">
        
         <a onClick={()=>onPress()}> <i style={{marginLeft:"180px"}} className="close large icon"></i></a>
        
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