import React from "react"
import DutySvg from "../assets/DutySvg.svg"
import {Fade} from "react-reveal"
import "./Cbm.css"
import "./DutyCalculator.css"

const DutyCalculator = () => {
    return (
        <React.Fragment>
           <div className="content-container">
        
        <div className="calculator-content">
        <Fade left>
          <div>

            <div className="calculator-content__heading">
              Duty Calculator
            </div>
            Customs authorities check whether shipments
            coming into the country adhere to local law on, for
            instance, health, safety, and IP laws.
            <br/>
            <br/>
            They also enforce customs duties regulations. A
customs duty, sometimes called an import duty, is a
tax applied to products imported for resale.
            <br/>
            <br/>
            Import duties or custom duty tax may be applied to
protect local production, to penalize the country of
import, to penalize a product that would be sold
below fair market value (anti-dumping), or simply as a
source of government revenue.

          </div>
          </Fade>
          
        </div>
       
        <Fade right>
        <img src={DutySvg} alt="calculator" className="cbmimage" />
        </Fade>
      </div>
      <div className="DutyCal">
        <div className="dutyCalRow">
          <div className="step">
            <div className="stepHeading">
            STEP 1 : Invoice Calculation
            </div>
            <div style={{marginTop:"8rem"}}className="inputRow">
              <div style={{fontSize:"1.5rem"}}>
                Currency
              </div>
            <div className="ui  input">
              <input/>
            </div>
            </div>
            <div className="inputRow">
            <div style={{fontSize:"1.5rem"}}>
                Exchange Rate
              </div>
            <div className="ui  input">
              <input/>
            </div>
            </div>
            <div className="inputRow">
            <div style={{fontSize:"1.5rem"}}>
                Invoice Value
              </div>
            <div className="ui  input">
              <input/>
            </div>
            </div>
            <div className="inputRow">
            <div style={{fontSize:"1.5rem"}}>
                Freight
              </div>
            <div className="ui  input">
              <input/>
            </div>
            </div>
            <div className="inputRow">
            <div style={{fontSize:"1.5rem"}}>
                Insurace
              </div>
            <div className="ui  input">
              <input/>
            </div>
            </div>
            <div className="inputRow">
            <div style={{fontSize:"1.5rem"}}>
                CIF in rupees
              </div>
            <div className="ui  input">
              <input/>
            </div>
            </div>
            </div>

            <div className="step">
            <div className="stepHeading">
            STEP 2 : Duty Calculation
            </div>
            <div className="inputRow">
            <div style={{fontSize:"1.5rem"}}>
                CIF in rupees
              </div>
            <div className="ui  input">
              <input/>
            </div>
            <div className="ui  input">
              <input/>
            </div>
            
            </div>
            </div>
        </div>
        <div className="dutyCalRow">
        <div className="step">
        <div className="stepHeading">
            STEP 3
            </div>
            
            
            </div>
            <div className="step">
            <div className="stepHeading">
            STEP 4
            </div>
            </div>
        </div>
      </div>
        </React.Fragment>
    )
}

export default DutyCalculator;