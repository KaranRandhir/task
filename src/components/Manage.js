import React from "react"
import "./manage.css"
import Fade from "react-reveal/Fade"
import manage from "../assets/manage.svg"
import navigation from "../assets/navigation.svg"
import documentation from "../assets/documentation.svg"
import rates from "../assets/rates.svg"

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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada justo a ante interdum, 
    ut volutpat nunc tincidunt. Ut nisl eros, fermentum a leo quis, convallis feugiat mi.
     Ut rutrum auctor lorem. Nulla in condimentum lacus. Fusce venenatis metus non orci lobortis pharetra.
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada justo a ante interdum, 
    ut volutpat nunc tincidunt. Ut nisl eros, fermentum a leo quis, convallis feugiat mi.
     Ut rutrum auctor lorem. Nulla in condimentum lacus. Fusce venenatis metus non orci lobortis pharetra.
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada justo a ante interdum, 
    ut volutpat nunc tincidunt. Ut nisl eros, fermentum a leo quis, convallis feugiat mi.
     Ut rutrum auctor lorem. Nulla in condimentum lacus. Fusce venenatis metus non orci lobortis pharetra.
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
    >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada justo a ante interdum, 
    ut volutpat nunc tincidunt. Ut nisl eros, fermentum a leo quis, convallis feugiat mi.
     Ut rutrum auctor lorem. Nulla in condimentum lacus. Fusce venenatis metus non orci lobortis pharetra.
    </div>
    </div>
    </Fade>
    <Fade right><img src={rates}/></Fade>
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
    </div>

</div>
   )
}

export default Manage;