import React from "react"
import "./why.css"
import Fade from "react-reveal/Fade"

class Why extends React.Component{
    
    state = {card1:"visible",card2:"notVisible",card3:"notVisible"}

    
    
    render(){
       return (
        <div className="why">
        
        <div className="title">
            Why Choose Us
            <p style={{fontSize:"1rem",color:"grey",marginTop:"4vh"}}>We redefine supply chains through technology</p>
        </div>

        <div className="line">
            
            <div className="options">
                <Fade left >
                <div onClick={()=>this.setState({card1:"visible",card2:"notVisible",card3:"notVisible"})} className="option">
                <i class="clock outline large icon"></i>Reliable and on time transports.
                </div>
                <div  onClick={()=>this.setState({card1:"notVisible",card2:"visible",card3:"notVisible"})} className="option">
                <i class="search large icon"></i> Transparent Supply Chain.
                </div>
               
                <div  onClick={()=>this.setState({card1:"notVisible",card2:"notVisible",card3:"visible"})} className="option">
                <i class="hourglass outline icon large"></i>  Efficient and effective workflows.
                </div>   
                </Fade>
               
            </div>
            
            <div className="description">
                
                <div className={`${this.state.card1}`}>
                   <ul className="unordered">
                       <li className="listItem">Real time tracking and live updates</li>
                       <li className="listItem">Proactive approach in case of delays</li>
                       <li className="listItem">All documents in just one single form.</li>
                    </ul>
                </div>
                
                <div className={`${this.state.card2}`}>
                <ul className="unordered">
                       <li className="listItem">More actionable data.</li>
                       <li className="listItem">Dicovering new targeted marketing opportunities.</li>
                       <li className="listItem">Meaningful business and element of trust.</li>
                    </ul>
                </div>

                <div className={` ${this.state.card3}`}>
                <ul className="unordered">
                       <li className="listItem">Track request status in real time.</li>
                       <li className="listItem">Drastically reduce paperwork and related cost and waste.</li>
                       <li className="listItem">24/7 access to approve and monitor requests and task.</li>
                    </ul>
                </div>

            </div>
        
        </div>
   
    </div>
       )
    }
}

export default Why;