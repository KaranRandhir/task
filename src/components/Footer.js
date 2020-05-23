import React from "react"
import "./footer.css"
const Footer = () => {
    return (
        <div style={{background:"black",display:"flex",flexDirection:"column",textAlign:"center",marginTop:"5rem",height:"auto"}}>
        <div className="footer">
            <div  className="abouts" >
           
            <div className="elem">
                <ul style={{marginLeft:"0",padding:"0"}}>
                    <li className="about">IndiaPort</li>
                    <li>Frieght Rates</li>
                    <li>Shipping Documents</li>
                    <li>Container Tracking</li>
                    
                </ul>
            </div>
            <div className="elem">
                <ul style={{marginLeft:"0",padding:"0"}}>
                    <li className="about">COMPANY</li>
                    <li>Customer Support</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                    
                </ul>
            </div>
            <div className="elem">
                <ul style={{marginLeft:"0",padding:"0"}}>
                    <li className="about">Services</li>
                    <li>FCL Freight </li>
                    <li>LCL Freight </li>
                    <li>Air Freight </li>
                  
                   
                </ul>
            </div>
            <div className="elem">
                <ul style={{marginLeft:"0",padding:"0"}}>
                    <li className="about">Learn</li>
                    <li>Education</li>
                    <li>News</li>
                    <li>Blogs</li>
                    
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