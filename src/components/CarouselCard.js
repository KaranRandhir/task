import React from "react"
import "./carouselCard.css"


const CarouselCard = ({title,content,img}) => {
    return (
        <div className="carouselCard">
            <img src={img} className="png"/>
            <div className="service">
            {title}
            </div>
            <div className="content">
            {content}       
            </div>
        </div>
        
    )
}

export default CarouselCard;