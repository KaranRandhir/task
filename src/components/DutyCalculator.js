import React from "react";
import DutySvg from "../assets/DutySvg.svg";
import { Fade } from "react-reveal";
import "./Cbm.css";
import "./DutyCalculator.css";

const DutyCalculator = () => {
  return (
    <React.Fragment>
      <div className="content-container">
        <div className="calculator-content">
          <Fade left>
            <div>
              <div className="calculator-content__heading">Duty Calculator</div>
              Customs authorities check whether shipments coming into the
              country adhere to local law on, for instance, health, safety, and
              IP laws.
              <br />
              <br />
              They also enforce customs duties regulations. A customs duty,
              sometimes called an import duty, is a tax applied to products
              imported for resale.
              <br />
              <br />
              Import duties or custom duty tax may be applied to protect local
              production, to penalize the country of import, to penalize a
              product that would be sold below fair market value (anti-dumping),
              or simply as a source of government revenue.
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
            <div className="stepHeading">STEP 1 : Invoice Calculation</div>
            <div className="ui form">
              <div className="feild">
               
                <div class="two fields">
                 
                  <div class="field">
                  <label style={{fontSize:"1rem"}}>Currency</label>
                    <input
                      type="text"
                      name="shipping[first-name]"
                      placeholder="percentage"
                    />
                  </div>
                  <div class="field">
                    <label style={{fontSize:"1rem"}}>Exchange Rate</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="rupees"
                    />
                  </div>
                </div>
              </div>

                <div className="feild">
                <label>Total(including duties)</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
              <br/>
              <div className="feild">
                <label>Total(including duties)</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
              <br/>
              <div className="feild">
                <label>Total(including duties)</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
              <br/>
              <div className="feild">
                <label>Total(including duties)</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
                  
                  
                
                
                 
              
               
            </div>
          </div>

          <div className="step">
            <div className="stepHeading">STEP 2 : Duty Calculation</div>
            <div className="ui form">
              <div className="feild">
                <label>Basic Duty</label>
                <div class="two fields">
                  <div class="field">
                    <input
                      type="text"
                      name="shipping[first-name]"
                      placeholder="percentage"
                    />
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="rupees"
                    />
                  </div>
                </div>
              </div>
              <div className="feild">
                <label>Basic Duty</label>
                <div class="two fields">
                  <div class="field">
                    <input
                      type="text"
                      name="shipping[first-name]"
                      placeholder="percentage"
                    />
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="rupees"
                    />
                  </div>
                </div>
              </div>
              <div className="feild">
                <label>Basic Duty</label>
                <div class="two fields">
                  <div class="field">
                    <input
                      type="text"
                      name="shipping[first-name]"
                      placeholder="percentage"
                    />
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="rupees"
                    />
                  </div>
                </div>
              </div>
              <div className="feild">
                <label>Basic Duty</label>
                <div class="two fields">
                  <div class="field">
                    <input
                      type="text"
                      name="shipping[first-name]"
                      placeholder="percentage"
                    />
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="rupees"
                    />
                  </div>
                </div>
              </div>
              <div className="feild">
                <label>Basic Duty</label>
                <div class="two fields">
                  <div class="field">
                    <input
                      type="text"
                      name="shipping[first-name]"
                      placeholder="percentage"
                    />
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="rupees"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dutyCalRow">
          <div className="step">
            <div className="stepHeading">STEP 3</div>
            <div className="ui form">
              <div className="feild">
                <label>Anti Dumping (Foreign Values)</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
              <br />

              <div className="feild">
                <label>Anti Dumping (Percentage)</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
              <br />

              <div className="feild">
                <label>Total with dumping(INR)</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
              <br />

              
            </div>
          </div>
          <div className="step">
            <div className="stepHeading">Result</div>
            <div className="ui form">
              <div className="feild">
                <label>Total Duties</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
              <br />

              <div className="feild">
                <label>Anti Dumping Total</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
              <br />

              <div className="feild">
                <label>CIF Total</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
              <br />

              <div className="feild">
                <label>Total(including duties)</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DutyCalculator;
