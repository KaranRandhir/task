import React, { useState } from "react";
import calculator from "../assets/calculator.svg"
import "./Cbm.css";
const Cbm = () => {
  const [length, setlength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, changeUnit] = useState("cm");
  const [result,changeResult]= useState()
  
  const calculate = () => {
      if(length===""||breadth===""||height===""){
        changeResult(<div style={{color:"red"}}>All Feilds are compulsary</div>)
        }
    else{
    changeResult(<div style={{fontSize:"1.4rem"}}>Volume is {length*breadth*height} {unit}<sup>3</sup></div>)
    }
  }
  return (
    <div>
    <div className="cbmCalculatorContainer">
    
      <div className="cbmCalculator">
      <div className="cbm-heading">CBM Calculator</div>
        <div className="select-options">
          <div class="ui labeled input">
            <div class="ui label">Unit</div>
            <select
              class="ui compact large selection dropdown"
              onChange={(e) => changeUnit(e.target.value)}
            >
              <option selected="true" value="cm">
                cm
              </option>
              <option value="m">m</option>
            </select>
          </div>
        </div>

        <div class="ui large labeled input">
          <div class="ui label">Length</div>
          <input
            type="number"
            value={length}
            onChange={(e) => setlength(e.target.value)}
          />
        </div>

        <div class="ui large labeled input">
          <div class="ui label">Breadth</div>
          <input
            type="number"
            value={breadth}
            onChange={(e) => setBreadth(e.target.value)}
          />
        </div>

        <div class="ui large labeled input">
          <div class="ui label">Height</div>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          </div>

          <button onClick={()=>calculate()} class="ui primary large button">
            Calculate
        </button>
        <div>
            {result}
        </div>
       
      </div>

    </div>
    </div>
  );
};

export default Cbm;
