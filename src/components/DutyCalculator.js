import React, { useState } from "react";
import DutySvg from "../assets/DutySvg.svg";
import { Fade } from "react-reveal";
import "./Cbm.css";
import "./DutyCalculator.css";
import Footer from "./Footer";
const DutyCalculator = () => {
  
  const currencies = {
    "USD":75,
    "EUR":85,
    "INR":1
  }
  const [freight, setFreight] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [currency,setCurrency] = useState("USD")
  
  const [invoice,setInvoice]=useState(0)
  const exchange=currencies[currency]
  const[bd,setbd]=useState(20)
  const[sws,setSws]=useState(10)
  const[cvd,setCvd]=useState(0)
  const[gst,setGst]=useState(18)
  const cifAmount=(exchange*invoice*(1+(insurance*0.01)+(freight*0.01)));
  const bdAmount=(bd*(exchange*invoice*(1+(insurance*0.01)+(freight*0.01)))*0.01)
  const swsAmount=sws*0.01*bdAmount;
  const cvdAmount=(cvd*(bdAmount+cifAmount+swsAmount)*0.01)
  const gstAmount=(gst*(cifAmount+swsAmount+cvdAmount+bdAmount)*0.01)
  const totalDuty = gstAmount+swsAmount+cvdAmount+bdAmount
  const [antiDumpingForeign , setAntiDumpingForeign]=useState("")
  const [antiDumpingPercent,setantiDumpingPercent]=useState("")
  const antiDumpingValue = (antiDumpingForeign*exchange + (cifAmount+totalDuty)*antiDumpingPercent*0.01)
  console.log(cifAmount)
  console.log(swsAmount)
  console.log(cvdAmount)
  console.log(bdAmount)
  console.log(gstAmount)
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
                    <label style={{ fontSize: "1rem" }}>Currency</label>
                   <select onChange={(e)=>setCurrency(e.target.value)} className="ui dropdown">
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="EUR">EUR</option>
                    </select>
                  </div>
                  <div class="field">
                    <label style={{ fontSize: "1rem" }}>Exchange Rate</label>
                    <input
                      value={exchange}
                      type="number"
                      name="exchange-rate"
                      placeholder="exchange rate"
                    />
                  </div>
                </div>
              </div>
              <div className="feild">
                <label>Invoice Value (in selected currency)</label>

                <input
                value={invoice}
                onChange={(e)=>setInvoice(e.target.value)}
                  type="number"
                  name="invoice-value"
                  placeholder="Invoice Value"
                />
              </div>
              <br/>

              <div className="inline fields">
                <div className="field">
                  <div
                    onClick={
                      freight ? () => setFreight(false) : () => setFreight(20)
                    }
                    class="ui checkbox"
                  >
                    <input
                      type="checkbox"
                      tabIndex="0"
                      className="hidden"
                      checked={freight===20?true:false}
                    />
                    <label>Freight (20%)</label>
                  </div>
                </div>
                <div className="field">
                  <label>20% {currency}</label>
                  <input 
                  disabled
                  value={freight===20?freight*invoice*0.01:0} />
                </div>
                <div className="field">
                  <label>Freight(if Known)</label>

                  <input
                    disabled={freight===20?true:false}
                    value={freight===20?false:freight}
                    onChange={freight===20?null:(e)=>setFreight(e.target.value)}
                    type="number"
                    name="freight"
                    placeholder="percentage"
                  />
                </div>
              </div>
              <br />
              <div className="inline fields">
                <div className="field">
                  <div
                    onClick={
                      insurance ? () => setInsurance(false) : () => setInsurance(1.25)
                    }
                    class="ui checkbox"
                  >
                    <input
                    
                      type="checkbox"
                      tabindex="0"
                      class="hidden"
                      checked={insurance===1.25?true:false}
                    />
                    <label>Insurance (1.125%)</label>
                  </div>
                </div>
                <div className="field">
                  <label>1.125% {currency}</label>
                  <input
                  value={insurance===1.25?insurance*invoice*0.01:0} 
                  disabled />
                </div>
                <div className="field">
                  <label>Insurance (if known)</label>

                  <input
                  disabled={insurance===1.25?true:false}
                    type="number"
                    value={insurance===1.25?null:insurance}
                    onChange={insurance===1.25?null:e=>setInsurance(e.target.value)}
                    name="insurance"
                    placeholder="percentage"
                  />
                </div>
              </div>

              <br />
              <div className="feild">
                <label>CIF in INR</label>

                <input
                disabled
                  type="number"
                  value={(exchange*invoice*(1+(insurance*0.01)+(freight*0.01))).toFixed(2)}
                  name="cif"
                  placeholder="CIF"
                />
              </div>
              <br />
              
            </div>
          </div>

          <div className="step">
            <div className="stepHeading">STEP 2 : Duty Calculation</div>
            <div className="ui form">
              <div className="feild">
                
                <div class="two fields">
                
                  <div class="field">
                  <label>Basic Duty %</label>
                    <input
                      value={bd}
                      onChange={(e)=>setbd(e.target.value)}
                      type="number"
                      name="basic-duty"
                     
                    />
                  </div>
                  <div class="field">
                    <label>INR</label>
                    <input
                    disabled
                    value={(bd*(exchange*invoice*(1+(insurance*0.01)+(freight*0.01)))*0.01).toFixed(2)}
                      type="number"
                      name="basic-duty-amount"
                     
                    />
                  </div>
                </div>
              </div>
              <div className="feild">
             
                <div class="two fields">
                  <div class="field">
                  <label>SWS %</label>
                    <input
                    value={sws}
                      type="number"
                      name="sws"
                      onChange={(e)=>setSws(e.target.value)}
                   
                    />
                  </div>
                  <div class="field">
                    <label>INR</label>
                    <input
                    disabled
                      type="number"
                      name="sws-amount"
                      value={(sws*(bd*(exchange*invoice*(1+(insurance*0.01)+(freight*0.01)))*0.01)*0.01).toFixed(2)}
                    />
                  </div>
                </div>
              </div>
              <div className="feild">
                
                <div class="two fields">
                  <div class="field">
                  <label>Additional Duty of Customs (CVD) %</label>
                    <input
                    value={cvd}
                      type="number"
                      name="cvd"
                      onChange={e=>setCvd(e.target.value)}
                     
                    />
                  </div>
                  <div class="field">
                  <label>INR</label>
                    <input
                    value={cvdAmount.toFixed(2)}
                    disabled
                      type="number"
                      name="cvd-amount"
                   
                    />
                  </div>
                </div>
              </div>
              <div className="feild">
                
                <div class="two fields">
                  <div class="field">
                  <label>GST %</label>
                    <input
                      type="number"
                      name="gst"
                      value={gst}
                      onChange={e=>setGst(e.target.value)}
                     
                    />
                  </div>
                  <div class="field">
                    <label>INR</label>
                    <input
                    disabled
                    value={gstAmount.toFixed(2)}
                      type="number"
                      name="gst-amount"
                     
                    />
                  </div>
                </div>
              </div>
              <div className="feild">
                
                <div class="two fields">
           
                  <div class="field">
                  <label>Total Duties %</label>
                    <input
                    value={(totalDuty/cifAmount*100).toFixed(2)}
                      type="number"
                      name="total-duty"
                    
                    />
                  </div>
                  <div class="field">
                  <label>INR</label>
                    <input
                    disabled
                      type="number"
                      name="total-duty-amount"
                      value={totalDuty.toFixed(2)}
                     />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dutyCalRow">
          <div className="step">
            <div className="stepHeading">
              STEP 3 Anti Dumping Duties (if any)
            </div>
            <div className="ui form">
              <div className="feild">
                  <label>Anti Dumping {currency}</label>
                  
                <input
                  type="number"
                  value={antiDumpingForeign}
                  onChange={(e)=>setAntiDumpingForeign(e.target.value)}
                  disabled={antiDumpingPercent>0}
                  name="anti-dumping-value"
                  placeholder={antiDumpingPercent>0?"disabled":""}
                
                />
              </div>
              <br />

              <div className="feild">
                <label>Anti Dumping (Percentage)</label>

                <input
                  type="number"
                  disabled={antiDumpingForeign>0}
                  value={antiDumpingPercent}
                  placeholder={antiDumpingForeign>0?"disabled":""}
                  onChange={e=>setantiDumpingPercent(e.target.value)}
                  name="antiDumpingPercent"
                  
                />
              </div>
              <br />

              <div className="feild">
                <label>Anti Dumping (INR)</label>

                <input
                  type="number"
                  value={antiDumpingValue.toFixed(2)}
                  name="antiDumpingValue"
                />
              </div>
              <br />
            </div>
          </div>
          <div className="step">
            <div className="stepHeading">RESULT</div>
            <div className="ui form">
              <div className="feild">
                <label>Total Duties</label>

                <input
                  value={totalDuty}
                  type="number"
                  name="totalduties"
                  
                />
              </div>
              <br />

              <div className="feild">
                <label>Anti Dumping Total</label>

                <input
                  type="number"
                  name="adtotal"
                  value={antiDumpingValue}
                />
              </div>
              <br />

              <div className="feild">
                <label>CIF Total</label>

                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="percentage"
                  value={cifAmount}
                />
              </div>
              <br />

              <div className="feild">
                <label>Total(including duties)</label>

                <input
                  type="number"
                  value={cifAmount+antiDumpingValue+totalDuty}
                  name="alltotal"
                  placeholder="total amount"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cbm-info">
        CUSTOM DUTY
        <br />
        Customs means Govt. service which is responsible for the use of customs
        law and regulation to collect duties and taxes. It also has
        responsibility to use of other laws & regulations related to import,
        export, transportation or storage of products. Customs has been treated
        as the ﬁscal subject (topic) that charges customs duties and other taxes
        on export or import.
        <br />
        <br />
        Customs Duty is a special type of tariﬀ or tax imposed on goods when
        exported or imported across international borders. Objective Customs
        Duty is to protect each country’s economy, residents, jobs, environment,
        etc., by controlling the export and import of products/items, mainly
        restrictive and prohibited goods, into and out of the nation. Each
        product/item has a predeﬁned rate of customs duty that is determined
        based on several factors, including where such product/ item was
        acquired, where such products were made, & what these products is made
        of. Alongside, anything that you bring into any country for the ﬁrst
        time should be declared as per the customs rules. For example, you
        should need to declare the items/products purchased in a foreign country
        and any gifts which you get or buy outside India.
        <br></br>
        <br />
        Custom Duty In India
        <br></br>
        Custom duty India came into existence under the Customs Act, 1962 &
        allows the government of India to levy customs duty on imports and
        exports, prohibit import and export of goods, procedures for importing
        or exporting & oﬀenses, penalties, etc. The CBEC is a division of the
        Department of Revenue of the Ministry of Finance of India. All the
        matters related to it in India come under the (CBEC) Central Board of
        Excise and Customs. CBEC has created policies that are used for
        collection or levying of customs duties, duty evasion, smuggling
        prevention & administrative decisions related to customs laws and
        regulations. CBEC has diﬀerent divisions for diﬀerent works related to
        Custom duty on import or export of products in or out of India.
        <br />
        <br />
        Custom Import Duty In India
        <br />
        Custom import duty is a tax collected on imports of goods by (any
        country’s customs authorities) Indian customs authorities when goods
        imported ﬁrst time into India (any country). Import duty mainly depends
        on the good’s value. Depending on the context, import duty may also be
        called as a customs duty, custom tariﬀ, and import tax or import tariﬀ.
        <br />
        <br />
        DETAILS ABOUT CUSTOM DUTIES Basic :
        <br />
        Basic duty is applied on imported items/products that come under the
        ambit of Section 12 of the Customs Act, 1962. These custom duties are
        imposed at the rates prescribed in First Schedule to Customs Tariﬀ Act,
        1975, under the terms/products speciﬁed in Section 2 of the act. The
        levied rates can be standard or preferential as per the nation of
        import.
        <br />
        <br />
        Additional (Countervailing Duty (CVD)) :
        <br />
        This duty is imposed on imported items under Section 3 of Customs Tariﬀ
        Act, 1975. It is equivalent to the Central Excise Duty that is
        applicable on similar goods produced within India. This duty is
        calculated on the aggregate value of goods including BDC and landing
        charges. Protective Duty : Protective duty may be applied to shield the
        domestic industry against imports at a rate recommended by the Tariﬀ
        Commissioner. Education Cess : This is applied at 2% and higher
        education cess at another 1% of the aggregate of customs duties.
        Anti-dumping Duty : Anti-dumping duty may be levied if the good being
        imported is at below fair market rate, and is limited to the diﬀerence
        between export & normal price (dumping margin). Safeguard Duty :
        Safeguard duty is applied if the government feels that a sudden increase
        in exports can potentially damage the domestic industry of the country
        <br />
        <br />
        CUSTOM DUTY CALCULATIONS
        <br />
        Custom duties are evaluated on speciﬁc or ad valorem basis, i.e. on the
        value of goods. The value of product/goods is determined by Rule 3(i) of
        Customs Valuation (Determination of Value of Goods Imported by someone)
        Rules, 2007. This rule ﬁxes the value of imported goods at the
        transaction value that has been adjusted as per the provisions under
        Rule 10. If there are no quantiﬁable or objective data related the
        valuation factors, valuation conditions are not satisﬁed, or there are
        some doubts regarding the accuracy or truth of declared value as per
        Rule 12 of Valuation Rules 2007, valuation of items/products has to be
        done through other means as per the below given hierarchy (sequence of
        steps), Comparative Value Method which compares the transaction value of
        similar products/items (Rule 4) Comparative Value Method which compares
        the transaction value of similar products/items (Rule 5) Deductive Value
        Method which uses the sale rate of the item in importing country (Rule
        7) Computed Value Method which utilizes the costs related to
        fabrication, materials, and proﬁt in the production country (Rule 8)
        Fall-back method which is based on the previous methods with higher
        ﬂexibility (Rule 9)
        <br />
        <br />
        CUSTOM DUTY CALCULATOR You can get the online calculator free at the
        ICEGATE web portal. Once you get the calculator, you need to ﬁll the HS
        Code (CTH Code) of the good/product/item you are planning to import.
        Enter product description with a maximum length of 30 characters and
        select the country of origin of the product you have purchased or going
        to buy (for antidumping or preferential duty). Click on the Search
        button and you will get a list of goods/products that match your search
        criteria. Select one and you will be able to ﬁnd a chart with all info
        related to the duty on selected product/item. This is a dynamic chart &
        you can enter values to check the actual duty you are liable to pay.
        <br />
        <br />
        CUSTOM IMPORT DUTY AFTER GST IN INDIA Goods and Services Tax (GST)
        <br />
        <br />
        is applicable on all imports into India in the form of levy of
        Integrated Goods & Service Tax (IGST). IGST is imposed on the value of
        imported products/goods plus customs duty chargeable on the
        products/goods. Hence, IGST must be calculated after adding the
        applicable customs duty to the value of imported items/goods. According
        to World Bank reports applied average tariﬀs by India were 6.3 %.
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default DutyCalculator;
