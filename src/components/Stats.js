import React from "react";
import Percent from "./Percent"
import "./stats.css"

const Stats = () => {
    return (
        <div className="stats">
            <div>
                <div className="num">
                    <Percent number={15}/>
                </div>
                <div className="des">
                    Higher on time performance
                </div>
            </div>

            <div>
                <div className="num">
                    <Percent number={30}/>
                    
                </div>
                <div className="des">
                    Lower administrative work
                </div>
            </div>

            <div>
                <div className="num">
                    <Percent number={15}/>
                </div>
                <div className="des">
                    Total transportation save
                </div>
            </div>
          
        </div>
    )
}

export default Stats;