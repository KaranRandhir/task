import React from "react"
import "./Home.css"
import Companies from "./Companies"

const Home = ()=> {
    return(
        <div className="homepage">
            <div style={{paddingTop:"8rem",fontWeight:"550"}}className="text">
            <p>A platform created to ease global trade.<br/>
                We bridge every piece of global logistics puzzle.
            </p>
            </div>
            <div className="inputs">
            <div className="single" style={{marginRight:".5rem"}}>
                <div className="details">
                TRANSPORT BY
                </div>
                <div class="ui white icon buttons">
               <button class="ui white button"><i class="plane large  icon"></i></button>
               <button class="ui white button"><i class="ship  icon"></i></button>
               <button class="ui  white button"><i class="shipping fast width  icon"></i></button>
               </div>
                </div>
                
                <div className="single">
                <div className="details">
                ORIGIN OF SHIPMENT
                </div>
                <div class="ui left icon  input">
                <input type="text" placeholder="Country,City,Port"/>
                <i class="arrow alternate circle up icon"></i>
                </div>
                </div>
                
                <div className="single">
                <div className="details">
                DESTINATION OF SHIPMENT
                </div>
                <div class="ui left icon input">
                <input type="text" placeholder="Country,City,Port"/>
                <i class="arrow alternate circle down icon"></i>
                </div>
                </div>
                
                <div className="single">
                <div className="details">
                READY TO LOAD
                </div>
                <div className="ui left icon input">
                <input type="text" placeholder="Date"/>
                <i className="calendar alternate outline icon"></i>
                </div>
                </div>
                
                <div className="single">
                <div className="details">
                TYPE OF SHIPMENT
                </div>
                <div className="ui left icon input">
                <input type="text" placeholder="Type"/>
                <i className="archive icon"></i>
                </div>
                </div>

                <div className="single blue" >
                <br/>
                <button className="ui primary button">
                Search
                </button>
                </div>
                </div>

                  <div style={{paddingTop:"8rem"}} className="text second">
            <p>IndiaPort is a technology company closely working on shipping lines and custom brokers 
                to provide you trouble free-trading.We at IndiaPort are commited to making it easier for the traders
                to book transport, manage the shipment and solve problems in an organized and quick way.
            </p>
            </div>
            <Companies/>
        </div>
    )
}

export default Home;