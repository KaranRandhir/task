import React from "react"
import "./footer.css"
const Footer = () => {
    return (
        <div style={{background:"#2730ab",display:"flex",flexDirection:"column",textAlign:"center",marginTop:"5rem",height:"auto"}}>
        <div className="footer">
            <div  className="abouts" >
           
            <div className="element">
                <ul>
                    <li className="about">DISCOVER</li>
                    <li>How it Works</li>
                    <li>What we treat</li>
                    <li>Help us by Donating</li>
                    
                </ul>
            </div>
            <div className="element">
                <ul>
                    <li className="about">COMPANY</li>
                    <li>For health Providers</li>
                    <li>About TeleAfya</li>
                    <li>Why TeleAfya</li>
                    
                </ul>
            </div>
            <div className="element">
                <ul>
                    <li className="about">PARTNER</li>
                    <li>Mobile Healthcare </li>
                    <li>Mobile Urgentcare </li>
                    <li>Mobile Healthcare </li>
                   
                </ul>
            </div>
            <div className="element">
                <ul>
                    <li className="about">SUPPORT</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    
                </ul>
            </div>
            
         
        </div>
        <div style={{marginTop:"1rem"}}>
        <i class="twitter icon"></i>
        <i class="facebook icon"></i>
        <i class="instagram icon"></i>
        </div>
        <div style={{marginTop:"1.5rem",color:"grey"}}>
        Ⓒ Copyright Ⓒ 2020, IndiaPort. All rights reserved
        </div>
      
        </div>
       
        </div>

    )
}

export default Footer;