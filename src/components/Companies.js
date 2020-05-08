import React from "react"
import "./Companies.css"
import accenture from "../assets/accenture.png"
import carlsberg from "../assets/carlsberg.png"
import disney from "../assets/disney.png"
import fedex from "../assets/fedex.png"
import kodak  from "../assets/kodak.png"
import gatorade  from "../assets/gatorade.png"
const Companies = () => {
    return (
        <div>
        <div className="wrapper">
        <div className="companies">
            <img src={fedex} className="logo" />
            <img src={carlsberg} className="logo" />
            <img src={accenture} className="logo" />
            <img src={disney} className="logo" />
            <img src={kodak} className="logo" />
            <img src={gatorade} className="logo" />
        </div>
        <div className="text">
            <strong>Trusted choice</strong> of Thousands of PM professionals
            
            <i class="star yellow icon" style={{marginLeft:"1rem"}}></i>
            <i class="star yellow icon"></i>
            <i class="star yellow icon"></i>
            <i class="star yellow icon"></i>
            <i class="star yellow icon"></i>
        </div>
        </div>
        <div className="companies" style={{background:"#dfeaf2",marginTop:"2rem",justifyContent:"space-around",paddingBottom:".5rem"}}>
            <div className="item">
                15%
                <div className="info">
                    higher on-time-performance
                </div>
            </div><div className="item">
                30%
                <div className="info">
                    lower administrative work
                </div>
            </div><div className="item">
                15%
                <div className="info">
                    total transporation cost save
                </div>
            </div>
        </div>
        </div>
        
         

        
    )
}

export default Companies;