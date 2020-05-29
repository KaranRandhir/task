import React, { useState } from "react";
import calculator from "../assets/calculator.svg";
import "./Cbm.css";
import CbmRow from "./CbmRow";
import { Fade } from "react-reveal";

const Cbm = () => {
  const [total1, setTotal1] = useState("0");
  const [total2, setTotal2] = useState("0");
  const [total3, setTotal3] = useState("0");
  const [total4, setTotal4] = useState("0");
  const [total5, setTotal5] = useState("0");

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

  return (
    <React.Fragment>
      <div className="content-container">
        <Fade left>
        <div className="calculator-content">
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
        </div>
        </Fade>
        <Fade right>
        <img src={calculator} alt="calculator" className="cbmimage" />
        </Fade>
      </div>
      <div className="cbmCalculator">
        <CbmRow multiply={calculateTotal1} show />
        <CbmRow multiply={calculateTotal2} />
        <CbmRow multiply={calculateTotal3} />
        <CbmRow multiply={calculateTotal4} />
        <CbmRow multiply={calculateTotal5} />
        <div className="total-cbm">
          Total Volume:
          {total1 + total2 + total3 + total4 + total5}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cbm;
