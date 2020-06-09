import React from "react"
import "./infocard.css"

import Card from "./Card"

import Slide from 'react-reveal/Slide'
import confirm from "../assets/confirm.png"
import quote from "../assets/quote.png"
import payment from "../assets/payment.png"
import tracking from "../assets/tracking.png"


const InfoCard = () => {
    return(
        
        <div className="cards" style={{alignItems:"center"}}>
       
        <div className="heading">Simplify how you work</div>
        
        <div className="row">
        <Slide left>
        <Card img={quote} title="Confirm a quick quote" content="Enter the details of your shipment to get a 
        real time, garanteed price from anywhere to everywhere." number={1}/>
        <Card img={confirm} title="Confirm a booking"  content="Verify details of your quote and confirm your booking
        by providing special handling instructions. "  number={2}/>
        </Slide>
        <Slide right>
        <Card img={payment} title="Make payment"  content="Complete yor payment online by credit/debit card." number={3}/>
        <Card img={tracking} title="Track Shipment"  content="Track your shipment throughout its journey,ensuring that you have
        complete visibility every step of the way." number={4}/>
        </Slide>
        </div>
       </div>
    )
}

export default InfoCard;