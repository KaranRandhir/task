import React from "react"
import "./Companies.css"
import accenture from "../assets/accenture.png"
import carlsberg from "../assets/carlsberg.png"
import disney from "../assets/disney.png"
import fedex from "../assets/fedex.png"
import kodak  from "../assets/kodak.png"
import gatorade  from "../assets/gatorade.png"
import HeadShake from 'react-reveal/HeadShake';
import Pulse from 'react-reveal/Pulse';
import Flip from 'react-reveal/Flip'



const Companies = () => {

    return (
        <div>
        
        <div className="wrapper">
       
        <div style={{opacity:"0.8"}}className="companies">
            <div className="item"><img src={fedex} className="logo" /></div>
            <div className="item"><img src={carlsberg} className="logo" /></div>
            <div className="item"><img src={accenture} className="logo" /></div>
            <div className="item"><img src={disney} className="logo" /></div>
            <div className="item"><img src={kodak} className="logo" /></div>
            <div className="item"><img src={gatorade} className="logo" /></div>
         </div>
        
        <div className="rating">
            <strong>Trusted choice</strong> of Thousands of PM professionals
            <br/>
            <i class="star yellow icon" style={{marginLeft:"1rem"}}></i>
            <i class="star yellow icon"></i>
            <i class="star yellow icon"></i>
            <i class="star yellow icon"></i>
            <i class="star yellow icon"></i>
        </div>
        </div>
        

        <div className="companies" style={{display:"flex",background:"#dfeaf2",marginTop:"2rem",justifyContent:"space-around",paddingBottom:".5rem"}}>
            <div className="item">
                <Pulse>
                15%
                </Pulse>
                <div className="info">
                    higher on-time-performance
                </div>
            </div><div className="item">
            <Pulse>
                15%
                </Pulse>
                <div className="info">
                    lower administrative work
                </div>
            </div><div className="item">
            <Pulse>
                15%
                </Pulse>
                <div className="info">
                    total transporation cost save
                </div>
            </div>
        </div>
        </div>
        
         

        
    )
}

export default Companies;