import React, { useState } from "react";

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
    changeResult(<div>Volume is {length*breadth*height} {unit}<sup>3</sup></div>)
    }
  }
  return (
      
    <div className="cbmCalculatorContainer">
      <div style={{ fontSize: "3rem" }}>CBM Calculator</div>
      <div className="cbmCalculator">
        <div className="select-options">
          <div class="ui labeled input">
            <div class="ui label">Unit</div>
            <select
              class="ui compact selection dropdown"
              onChange={(e) => changeUnit(e.target.value)}
            >
              <option selected="true" value="cm">
                cm
              </option>
              <option value="m">m</option>
            </select>
          </div>
        </div>

        <div class="ui labeled input">
          <div class="ui label">Length</div>
          <input
            type="number"
            value={length}
            onChange={(e) => setlength(e.target.value)}
          />
        </div>

        <div class="ui labeled input">
          <div class="ui label">Breadth</div>
          <input
            type="number"
            value={breadth}
            onChange={(e) => setBreadth(e.target.value)}
          />
        </div>

        <div class="ui labeled input">
          <div class="ui label">Height</div>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          </div>

          <button onClick={()=>calculate()} class="ui primary button">
            Calculate
        </button>
        <div>
            {result}
        </div>
       
      </div>

    </div>
  );
};

export default Cbm;
