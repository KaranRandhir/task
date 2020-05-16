import React from "react"
import "./nav1.css"


const Nav2 = ({onPress}) => {
    return (
        <div class="ui borderless  menu">
       
        <div class="header item company">
          
          <div className="title">
          INDIAPORT<br/>
          </div>
          <div className="tagline">
         
          </div>
        </div>
        <div className="right menu">
          <a style={{alignSelf:"center",color:"black"}}onClick={()=>onPress()}><i  className="bars big icon"></i></a>
        </div>
       
      
      </div>
    )
}

export default Nav2;