import React from "react"
import "./footer.css"
import skyline from "../assets/skyline.png"
const Footer = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",textAlign:"center",marginTop:"5rem",height:"auto",position:"relative"}}>
        <div style={{position:"absolute",fontSize:"2rem",top:"2vh",left:"2vw"}}>INDIAPORT
        <br/><span style={{fontSize:"1rem",color:"green"}}>Simplifying Boundaries</span></div>
        <div className="footer">
        
          <img src={skyline}/>
        <div style={{marginTop:"1rem"}}>
        <span style={{fontSize:"2rem"}}>India<br/></span>
        406 B, Glitz Mall, Marine Lines,<br/>
        Mumbai Maharashtra 40002
        </div>
        
      
        </div>
        <div style={{marginTop:"5vh",color:"grey",width:"100vw",textAlign:"right",paddingRight:"3vw",paddingBottom:"2vh"}}>
        Ⓒ Copyright Ⓒ 2020, IndiaPort. All rights reserved
        </div>
       
        </div>

    )
}

export default Footer;