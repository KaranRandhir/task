import React from "react"
import VizSensor from "react-visibility-sensor"
import {Spring} from 'react-spring/renderprops'
import "./percent.css"



class Percent extends React.Component {
   state={visible:false,isvisible:false}
  render() {
       
        return (
        <VizSensor onChange={(visible)=>this.state.visible?null:this.setState({visible:visible})}>
        <div>
        {this.state.visible?<Spring from ={{number:0}}
        to={{number:this.props.number}}
        config={{duration:1800}}>
         {(props)=> props.number.toFixed()+"%"}
        </Spring>:"."}
        </div> 
      
        </VizSensor>
        )
        
        

     
    
  }
  }

  export default Percent;
  