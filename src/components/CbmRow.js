import React,{useState} from "react"
import "./CbmRow.css"

 
const CbmRow = (props) => {
    
    const[length,setLength] =useState("")
    const[breadth,setBreadth] =useState("")
    const[height,setHeight] =useState("")
    const[unit,setUnit]=useState("m")
    
    const calVolume = (unit,value) => {
        if(unit==="cm")
        return value*0.000001
        if(unit==="m")
        return value
        
    }
    
    return (
        <div className="cbm-row">
           

            <div>
            {props.show?<div>
            Length
            </div>:null}
        <div class="ui large input">
            <input 
            type="number" 
            placeholder="Length"
            value={length}
            onChange={(e)=>setLength(e.target.value)}
            onSubmit={props.multiply(unit==="m"?length*breadth*height:0.000001*length*breadth*height)}
            />
            
        </div>
        </div>

        <div>
        {props.show?<div>
            Breadth
            </div>:null}
        <div class="ui large input">
            <input 
            type="number" 
            placeholder="Breadth"
            value={breadth}
            onChange={(e)=>setBreadth(e.target.value)}
            
            
            />
            
        </div>
        </div>

        <div>
        {props.show?<div>
            Height
            </div>:null}
        <div class="ui large input">
            <input 
            type="number" 
            placeholder="Height"
            value={height}
            onChange={(e)=>setHeight(e.target.value)}
            
            />
            
        </div>
        </div>

        <div>
        {props.show?<div>
            Unit
            </div>:null}
            <select onChange={(e)=>setUnit(e.target.value)} class="ui compact selection dropdown">
   
    <option selected="true" value="m">m</option>
    <option value="cm">cm</option>
  </select>
        </div>
        <div>
        {props.show?<div>
            Cbm
            </div>:null}
        <div class="ui disabled large input">
            <input type="text"
             placeholder="CBM"
             value={calVolume(unit,length*breadth*height)}/>
        </div>
        <div>
        </div>
        
        </div>

            <div>
            {props.show?<div>
            Info
            </div>:null}
            <button class="ui large primary button">
  <i class="info circle icon"></i>
                info
</button>
            </div>
        
      
        </div>
    )
}

export default CbmRow;