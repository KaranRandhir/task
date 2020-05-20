import React from "react"
import "./manage.css"
import Fade from "react-reveal/Fade"
import manage from "../assets/manage.svg"
import navigation from "../assets/navigation.svg"
import documentation from "../assets/documentation.svg"
import rates from "../assets/rates.svg"
import time from "../assets/time.svg"

const Manage = () => {
   return (
    <div>
    <div className="features bigscreen" style={{marginTop:"15vh",marginBottom:"15vh"}}>

    
    
    <div className="feature">
    <Fade left><img src={manage}/></Fade>
    <Fade right>
    <div className="text">
    <div className="Name">
        Manage
    </div>
    <div>
        We manage all your shipment activities from transport and booking, to selecting a custom house agent and
        providing you with an insurance policy. For every service you can compare and select the supplier from multiple options 
        available on our platform according to your requirments.
    </div>
    </div>
    </Fade>
    </div>
   

   
    <div className="feature">
    <Fade left>
    <div className="text">
    <div className="Name">
        Track Your Shipment
    </div>
    <div>
    Indiaport negotiates with shipping lines in place of you to provide you with the best ongoing rate and the frieght volme.
    Our service <strong>Shipment Management</strong>, keeps you updated, making tracking of shipments easy.
    </div>
    </div>
    </Fade>
    <Fade right><img src={navigation}/></Fade>
    </div>
    

    
    <div className="feature">
    <Fade left><img src={documentation}/></Fade>
    <Fade right>
    <div className="text">
    <div className="Name">
        Online Documentation
    </div>
    <div>
    Tired of going through and filling various documents? Indiaport makes documentation hassle-free for you.
    With its <strong>Multiple Custom Document</strong>, Indiaport gets all your documents in one form to lessen your load.

    </div>
    </div>
    </Fade>
    </div>
    
    

    <div className="feature">
    <Fade left>
    <div className="text">
    <div className="Name">
        Transparency in rates
    </div>
    <div>
    We at IndiaPort treat every trader alike. Massive trader or fresh one you dont have to fret. Laying all the services
    directly by shipping lines and no more markup of agents as IndiaPort charges <strong>fix fees</strong> to smoothen your 
    trade and grants trasparency in rate and service.
    </div>
    </div>
    </Fade>
    <Fade right><img src={rates}/></Fade></div>
    <div className="feature">
    <Fade left><img src={time}/></Fade>
    <Fade right>
    <div className="text">
    <div className="Name">
        Cost Effiecient and time saver
    </div>
    <div>
    IndiaPort works closely with its customers to manage every shipment activity all in one platform. From custom clearence process
    to transport and booking, to selecting a custom hus agent of your choice, to procuring multiple custom documents as well as 
    insurance policy.Indiaport makes sure that your hours of work is done in a minute and you save time and avoid unnecessary fees.
    </div>
    </div>
    </Fade>
    </div>
    </div>
    <div className="features smallscreen" style={{marginTop:"15vh",marginBottom:"15vh"}}>

    
    
    <div className="feature">
    <Fade left><img src={manage}/></Fade>
    <Fade right>
    <div className="text">
    <div className="Name">
        Manage
    </div>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada justo a ante interdum, 
    ut volutpat nunc tincidunt. Ut nisl eros, fermentum a leo quis, convallis feugiat mi.
     Ut rutrum auctor lorem. Nulla in condimentum lacus. Fusce venenatis metus non orci lobortis pharetra.
    </div>
    </div>
    </Fade>
    </div>
   

   
    <div className="feature">
    <Fade right><img src={navigation}/></Fade>
    <Fade left>
    <div className="text">
    <div className="Name">
        Track Your Shipment
    </div>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada justo a ante interdum, 
    ut volutpat nunc tincidunt. Ut nisl eros, fermentum a leo quis, convallis feugiat mi.
     Ut rutrum auctor lorem. Nulla in condimentum lacus. Fusce venenatis metus non orci lobortis pharetra.
    </div>
    </div>
    </Fade>
    
    </div>
    

    
    <div className="feature">
    <Fade left><img src={documentation}/></Fade>
    <Fade right>
    <div className="text">
    <div className="Name">
        Online Documentation
    </div>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada justo a ante interdum, 
    ut volutpat nunc tincidunt. Ut nisl eros, fermentum a leo quis, convallis feugiat mi.
     Ut rutrum auctor lorem. Nulla in condimentum lacus. Fusce venenatis metus non orci lobortis pharetra.
    </div>
    </div>
    </Fade>
    </div>
    
    

    
    <div className="feature">
    <Fade right><img src={rates}/></Fade>
    <Fade left>
    <div className="text">
    <div className="Name">
        Transparency in rates
    </div>
    <div>
    >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada justo a ante interdum, 
    ut volutpat nunc tincidunt. Ut nisl eros, fermentum a leo quis, convallis feugiat mi.
     Ut rutrum auctor lorem. Nulla in condimentum lacus. Fusce venenatis metus non orci lobortis pharetra.
    </div>
    </div>
    </Fade>
    </div>

       
    <div className="feature">
    <Fade right><img src={time}/></Fade>
    <Fade left>
    <div className="text">
    <div className="Name">
        Cost Effecient and time saver
    </div>
    <div>
    >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada justo a ante interdum, 
    ut volutpat nunc tincidunt. Ut nisl eros, fermentum a leo quis, convallis feugiat mi.
     Ut rutrum auctor lorem. Nulla in condimentum lacus. Fusce venenatis metus non orci lobortis pharetra.
    </div>
    </div>
    </Fade>
    </div>


    
   
    
    </div>

</div>
   )
}

export default Manage;