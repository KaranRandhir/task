import React from "react"
import "./card.css"


const Card = ({img,title,content}) => {
    
    return(
        <div className="card">
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