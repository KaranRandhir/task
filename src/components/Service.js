import React from  "react"
import "./service.css"
import user from "../assets/user.png"
const Service = ({text})=> {
    return(
        <div className="service">
            <img src={user} className="user"/>
            {text}
        </div>
        
    )
}

export default Service;