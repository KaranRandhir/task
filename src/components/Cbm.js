import React, { useState } from "react";
import calculator from "../assets/calculator.svg"
import "./Cbm.css";
import CbmRow from "./CbmRow"
const Cbm = () => {
   const [total1,setTotal1] =useState("0")
   const [total2,setTotal2] =useState("0")
   const [total3,setTotal3] =useState("0")
   const [total4,setTotal4] =useState("0")
   const [total5,setTotal5] =useState("0")
  
   const calculateTotal1=(x) =>{
     setTotal1(x)
   }
   const calculateTotal2=(x) =>{
    setTotal2(x)
  }
  const calculateTotal3=(x) =>{
    setTotal3(x)
  }
  const calculateTotal4=(x) =>{
    setTotal4(x)
  }
  const calculateTotal5=(x) =>{
    setTotal5(x)
  }

  
  return(
   <div style={{width:"70vw",height:"50vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
   <CbmRow multiply={calculateTotal1} show/>
   <CbmRow multiply={calculateTotal2}/>
   <CbmRow multiply={calculateTotal3}/>
   <CbmRow multiply={calculateTotal4}/>
   <CbmRow multiply={calculateTotal5}/>

   {total1+total2+total3+total4+total5}
  
   
   </div>
 )
};

export default Cbm;
