import React from "react"
import "./manage.css"
import Fade from "react-reveal/Fade"
const Manage = () => {
   return (
    <div className="features" style={{marginTop:"15vh",marginBottom:"15vh"}}>
    <Fade left>
    <div className="feature odd">
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
    
    <Fade right>
    <div className="feature even">
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

    <Fade left>
    <div className="feature odd">
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
    <Fade right>
    <div className="feature even">
    <div className="Name">
        Transperency in dates
    </div>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada justo a ante interdum, 
    ut volutpat nunc tincidunt. Ut nisl eros, fermentum a leo quis, convallis feugiat mi.
     Ut rutrum auctor lorem. Nulla in condimentum lacus. Fusce venenatis metus non orci lobortis pharetra.
    </div>
    </div>
    </Fade>
</div>
   )
}

export default Manage;