import React from "react"
import DutySvg from "../assets/DutySvg.svg"
import {Fade} from "react-reveal"
import "./Cbm.css"

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
        </React.Fragment>
    )
}

export default DutyCalculator;