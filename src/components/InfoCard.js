import React from "react"
import "./infocard.css"
import desktop from "../assets/desktop.png"
import Card from "./Card"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'

const InfoCard = () => {
    return(
        <div className="cards">
       
        <div className="heading">Simplify how you work</div>
        
        <div className="row">
        <Slide left>
        <Card img={desktop} title="1. Confirm a quick quote" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi pulvinar ligula eget neque tempor."/>
        <Card img={desktop} title="2. Confirm a booking"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi pulvinar ligula eget neque tempor."/>
        </Slide>
        </div>
        
        <div className="row">
        <Slide right>
        <Card img={desktop} title="3. Make payment"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi pulvinar ligula eget neque tempor."/>
        <Card img={desktop} title="4. Track Shipment"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi pulvinar ligula eget neque tempor."/>
        </Slide>
        </div>
        
        <div style={{display:"flex", flexDirection:"column"}}>

        <div className="odd" >
        <Fade left>
        <span className="topic">MANAGE</span><br/>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         </Fade>
       
        </div>
        
        
        <div className="even">
        <Fade right>
        <span className="topic">TRACK YOUR SHIPMENTS</span><br/>
        2 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         </Fade>
        </div>
        
        
        
        <div className="odd">
        <Fade left>
        <span className="topic">ONLINE DOCUMENTATION</span><br/>
        3 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         </Fade>
        </div>
        
        
        <div className="even">
        <Fade right>
        <span className="topic">TRANSPERENCY IN RATES</span><br/>
        4 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Fade>
        </div>
        
        </div>
        
        </div>
    )
}

export default InfoCard;