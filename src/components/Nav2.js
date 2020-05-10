import React from "react"
import "./nav1.css"


const Nav2 = ({onPress}) => {
    return (
        <div class="ui borderless  menu">
        <a style={{alignSelf:"center",color:"black"}}onClick={()=>onPress()}><i  className="list large icon"></i></a>
        <div class="header item company">
          
          <div className="title">
          INDIAPORT<br/>
          </div>
          <div className="tagline">
          Simplifying Boundaries
          </div>
        </div>
       
      
      </div>
    )
}

export default Nav2;