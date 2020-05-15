import React, { useState } from "react"
import "./card.css"


const Card = ({img,title,content,number}) => {
    const [hover,setHover] = useState("")
    return(
        <div onMouseEnter={()=>setHover("hover")} onMouseLeave={()=>setHover("")} className="card">
            <div className={`${hover} number`}>{number}</div>
            <img src={img} className="png"/>
            <div className="title">
            {title}
            </div>
            <div className="content">
            {content}       
            </div>
        </div>
        )

    }

export default Card;