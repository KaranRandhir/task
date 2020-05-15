import React from "react"
import "./infocard.css"
import desktop from "../assets/desktop.png"
import Card from "./Card"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
import confirm from "../assets/confirm.png"
import quote from "../assets/quote.png"
import payment from "../assets/payment.png"
import tracking from "../assets/tracking.png"
import manStanding from "../assets/manStanding.png"

const InfoCard = () => {
    return(
        
        <div className="cards" style={{alignItems:"center"}}>
       
        <div className="heading">Simplify how you work</div>
        
        <div className="row">
        <Slide left>
        <Card img={quote} title="Confirm a quick quote" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi pulvinar ligula eget neque tempor." number={1}/>
        <Card img={confirm} title="Confirm a booking"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi pulvinar ligula eget neque tempor."  number={2}/>
        </Slide>
        <Slide right>
        <Card img={payment} title="Make payment"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi pulvinar ligula eget neque tempor." number={3}/>
        <Card img={tracking} title="Track Shipment"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi pulvinar ligula eget neque tempor." number={4}/>
        </Slide>
        </div>
       
       
        </div>
    )
}

export default InfoCard;