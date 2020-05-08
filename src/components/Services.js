import React from "react"
import "./services.css"
import Service from "./Service"

const Services = () => {
    return (
        <div className="services">
        Our Services
        
        <div className="four" style={{marginTop:"2rem"}}>
        <Service text="Accounting/Finance"/>
        <Service text="Custom Clearance"/>
        <Service text="Insurance"/>
        <Service text="Air Freight"/>
        <Service text="Sea Freigth"/>
        </div>
        <div className="four">
        <Service text="Shipment Managment"/>
        <Service text="Inland Transport"/>
        <Service text="Education"/>
        <Service text="Tracking"/>
        <Service text="Customer Support"/>
        </div>
        </div>
    )
}

export default Services;