import React, { useState } from "react";
import calculator from "../assets/calculator.svg";
import "./Cbm.css";
import CbmRow from "./CbmRow";
import { Fade } from "react-reveal";
import Footer from "./Footer"

const Cbm = () => {
  const [total1, setTotal1] = useState("0");
  const [total2, setTotal2] = useState("0");
  const [total3, setTotal3] = useState("0");
  const [total4, setTotal4] = useState("0");
  const [total5, setTotal5] = useState("0");
  const [total6, setTotal6] = useState("0");
 
  
  const calculateTotal1 = (x) => {
    setTotal1(x);
  };
  const calculateTotal2 = (x) => {
    setTotal2(x);
  };
  const calculateTotal3 = (x) => {
    setTotal3(x);
  };
  const calculateTotal4 = (x) => {
    setTotal4(x);
  };
  const calculateTotal5 = (x) => {
    setTotal5(x);
  };
  const calculateTotal6 = (x) => {
    setTotal6(x);
  };
  const [items,addItems] = useState([<div className="cbmCalculator small">
  <CbmRow multiply={calculateTotal6} show />
  </div>
]);
  return (
    <React.Fragment>
      <div className="content-container">
        
        <div className="calculator-content">
        <Fade left>
          <div>

            <div className="calculator-content__heading">
              Cubic Metre Calculator
            </div>
            This CBM calculator for shipping is a simple tool that helps you
            determine the volume and weight of your consignment. This helps you
            plan your transport: all you have to do is input the dimensions and
            weight of the cube you’re shipping, and our calculator will tell you
            how many cartons of this size will fit in a standard containers.
          </div>
          </Fade>
          
        </div>
       
        <Fade right>
        <img src={calculator} alt="calculator" className="cbmimage" />
        </Fade>
      </div>
      <div className="cbmCalculator big">
        <CbmRow multiply={calculateTotal1} show />
        <CbmRow multiply={calculateTotal2} />
        <CbmRow multiply={calculateTotal3} />
        <CbmRow multiply={calculateTotal4} />
        <CbmRow multiply={calculateTotal5} />
        
        
        <div className="total-cbm">
        <div class="ui = labeled input">
  <label for="amount" class="ui basic label">Total</label>
  <input disabled value={total1+total2+total3+total4+total5+" cbm"}/>
  
</div>
          
        </div>
      </div>
      {items}
   <div className="small">   
  <button style={{marginTop:"5vh",marginLeft:"4vw"}} onClick={()=>addItems([...items,<div className="cbmCalculator small">
  <CbmRow multiply={calculateTotal6} show />
  </div>])} class="ui large primary button">
  Add 
</button>
</div>
      <div className="cbm-info">
      Cubic Meter Calculator Formula<br/>
Length (in centimeter) X Width (in centimeter) X Height (in centimeter) / 1000000 = Cubic meter (m3)<br/>
We can input dimensions in Centimeter, milimeter, meter, inch, feet or yard<br/>
How to use Cubic Meter Calculator in Meter for Multiple Products?
<br/><br/><br/>
Loadability of ocean containers<br/>

20ft container approximately 26-28 CBM<br/>
40ft container approximately 55-58 CBM<br/>
40ft HQ container approximately 60-68 CBM<br/>
45ft HQ container approximately 78 CBM<br/>
<br/><br/><br/>
On this calculator you can add upto 5 products to get Volume Weight in meter (m3),<br/>
 Volume Weight in feet(f3),<br/>
Number of Packages Minimum & Maximum in Standard 20 FT Container,<br/>
Number of Packages Minimum & Maximum in Standard 40 FT Container, and<br/>
 Number of packages Minimum & Maximum in Standard 40 FT High Cube Container.<br/>
<br/><br/>
Steps; incase you enter dimensions in cm
<br/><br/>
Length (cm) : Your package length in centimeter<br/>
Breadth (cm) : Your package breath in centimeter<br/>
Height (cm) : Your package height in centimeter<br/>
Weight (kg) : Your package weight in kilogram<br/>
Quantity : Number of packages, it only effects the Weight, Volume Weight, and shipment volume.<br/><br/>
Results<br/>
Weight kg/lbs : Shipment weight in kg/lbs<br/>
Volume Weight kg/lbs : Volume weight of shipment in kg/lbs<br/>
Volume mt3/ft3: Shipment volume in mt3/ft3<br/>
20 FT min/max: Approx. minimum & maximum of packages which can be placed inside standard 20 FT container<br/>
40 FT min/max: Approx. minimum & maximum number of packages which can be placed inside standard 40 FT container<br/>
40 FT HC min/max: Approx. minimum & maximum number of packages which can be placed inside standard 40 FT High Cube container<br/>
      </div>
      <div className='cbmtable'>
      <table class="ui celled table">
  <thead>
    <tr><th>Container/Dimensions</th>
    <th>Length(cm)</th>
    <th>Breadth(cm)</th>
    <th>Height(cm)</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">10 FT Container</td>
      <td data-label="Age">589</td>
      <td data-label="Job">230</td>
      <td data-label="Job">230</td>
    </tr>
    <tr>
      <td data-label="Name">20 FT Container</td>
      <td data-label="Age">1200</td>
      <td data-label="Job">230</td>
      <td data-label="Job">230</td>
    </tr>
    <tr>
      <td data-label="Name">40 FT High Cube Container</td>
      <td data-label="Age">1200</td>
      <td data-label="Job">230</td>
      <td data-label="Job">260</td>
    </tr>
  </tbody>
</table>
        </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Cbm;
