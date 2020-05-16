import React from "react"
import "./why.css"
import Zoom from "react-reveal/Zoom"

class Why extends React.Component{
    
    state = {card1:"visible",card2:"notVisible",card3:"notVisible"}

    
    
    render(){
       return (
        <div className="why">
        
        <div className="title">
        </div>

        <div className="line">
            
            <div className="options">
                <div onClick={()=>this.setState({card1:"visible",card2:"notVisible",card3:"notVisible"})} className="option">
                <i class="clock outline large icon"></i>Reliable and on time transports.
                </div>
                <div  onClick={()=>this.setState({card1:"notVisible",card2:"visible",card3:"notVisible"})} className="option">
                <i class="search large icon"></i> Transparent Supply Chain.
                </div>
               
                <div  onClick={()=>this.setState({card1:"notVisible",card2:"notVisible",card3:"visible"})} className="option">
                <i class="hourglass outline icon large"></i>  Efficient and effective workflows.
                </div>   
               
            </div>
            
            <div className="description">
                
                <div className={`${this.state.card1}`}>
                   <ul className="unordered">
                       <li className="listItem">Real time tracking and live updates</li>
                       <li className="listItem">Proactive approach in case of delays</li>
                       <li className="listItem">everything in oneplace with online document management</li>
                    </ul>
                </div>
                
                <div className={`${this.state.card2}`}>
                    hello2
                </div>

                <div className={` ${this.state.card3}`}>
                    hello3
                </div>

            </div>
        
        </div>
   
    </div>
       )
    }
}

export default Why;