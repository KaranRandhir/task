import React,{useState} from "react"
import "./CbmRow.css"

 
const CbmRow = (props) => {
    
    const[length,setLength] =useState("")
    const[breadth,setBreadth] =useState("")
    const[height,setHeight] =useState("")

   
    
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
            onSubmit={props.multiply(length*breadth*height)}
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
            onSubmit={props.multiply(length*breadth*height)}
            />
            
        </div>
        </div>


        <div>
        {props.show?<div>
            Cbm
            </div>:null}
        <div class="ui disabled large input">
            <input type="text"
             placeholder="CBM"
             value={length*breadth*height}/>
        </div>
        
        </div>
        </div>
    )
}

export default CbmRow;