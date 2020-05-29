import React from "react"
import "./Home.css"
import Companies from "./Companies"
import Zoom from "react-reveal"
import Particles from "react-particles-js"
class Home extends React.Component{
    
    state={heading:"A PLATFORM CREATED TO EASE GLOBAL TRADE",text:"Shipping to and from anywhere",freight:"primary",container:"basic",freightSearch:"block",containerSearch:"none"}
  
    render() {
        return (
      
                <div className="homepage">
                        <div className="animation" style={{height:"0px"}}>
                        <Particles params={{particles:{number:{value:30},color:{value:"#5495f0"},size: {
                        value: 6,
                        random: true,
                    },move:{speed:2},
                        line_linked:{distance:0},
                        }}}/>
                        </div>

                    <div style={{marginTop:"0",fontWeight:"500",paddingTop:"3rem"}} className="text">
                   
                    <Zoom ><p style={{fontWeight:"600",display:`${this.state.freightSearch}`}}>{this.state.heading}<br/>
                      </p> </Zoom>
                      <Zoom >  <p style={{fontWeight:"600",display:`${this.state.containerSearch}`}}>{this.state.heading}<br/>
                      </p> </Zoom>
                      <div style={{fontSize:"1.5rem"}}>{this.state.text}</div>
                    </div>
                   
                    <div className="desktop">
                    <div style={{marginTop:"4rem"}} class="ui desktop buttons">
                    <button onClick={()=>this.setState({heading:"A PLATFORM CREATED TO EASE GLOBAL TRADE",freight:"primary",container:"basic",text:"Shipping to and from anywhere",freightSearch:"block",containerSearch:"none"})} style={{zIndex:"999",width:"15rem",borderTopLeftRadius:"16px",borderBottomLeftRadius:"16px"}}class={`ui blue ${this.state.freight} button`}>Freight Quotes</button>
                    <button onClick={()=>this.setState({heading:"TRACK A SHIPMENT",freight:"basic",container:"primary",text:"Check Shipment delivery status online",freightSearch:"none",containerSearch:"block"})}style={{zIndex:"999",width:"15rem",borderBottomRightRadius:"16px",borderTopRightRadius:"16px"}}class={`ui blue ${this.state.container} button`}>Container Tracking</button>
                    </div>
                    </div>

                    <div className="phone">                   
                    <div style={{marginTop:"4rem"}} class="ui vertical buttons">
                    <button onClick={()=>this.setState({heading:"A PLATFORM CREATED TO EASE GLOBAL TRADE",freight:"primary",container:"basic",text:"Shipping to and from anywhere",freightSearch:"block",containerSearch:"none"})} style={{zIndex:"999",width:"15rem",borderRadius:"16px"}}class={`ui blue ${this.state.freight} button`}>Freight Quotes</button>
                    <div style={{height:".5rem"}}></div>
                    <button onClick={()=>this.setState({heading:"TRACK A SHIPMENT",freight:"basic",container:"primary",text:"Check Shipment delivery status online",freightSearch:"none",containerSearch:"block"})}style={{zIndex:"999",width:"15rem",borderRadius:"16px"}}class={`ui blue ${this.state.container} button`}>Container Tracking</button>
                    </div>
                    </div>

                    <div style={{display:`${this.state.freightSearch}`}}>
                    <Zoom>
                    <div className="inputs">
                    
                    <div  className="single" style={{marginRight:".5rem"}}>
                        <div className="details">
                        TRANSPORT BY
                        </div>
                        <div class="ui white icon buttons">
                       <button style={{background:"white",height:"auto",borderRight:"solid .5px #e3e3e3"}} class="ui  button"><i class="plane blue icon"></i>
                       <div style={{fontSize:".6rem",marginTop:".5vh",color:"#95989c"}}>
                       AIR
                       </div>
                       </button>
                       <button style={{background:"white",borderRight:"solid .5px #e3e3e3"}} class="ui large  button"><i class="ship  blue icon"></i>
                       <div style={{fontSize:".6rem",marginTop:".5vh",color:"#95989c"}}>
                       SEA
                       </div></button>
                       <button style={{background:"white"}} class="ui large  button"><i class="shipping blue fast width  icon"></i>
                       <div style={{fontSize:".6rem",marginTop:".5vh",color:"#95989c"}}>
                       LAND
                       </div></button>
                       </div>
                        </div>
                        
                        <div className="single">
                        <div className="details">
                        ORIGIN OF SHIPMENT
                        </div>
                        <div class="ui left icon large input">
                        <input  style={{height:"4rem",borderRadius:0,borderTopLeftRadius:".3rem",borderBottomLeftRadius:".3rem"}}className="dhinkachika" type="text" placeholder="Country,City,Port"/>
                        <i class="arrow alternate blue circle up icon"></i>
                        </div>
                        </div>
                        
                        <div className="single">
                        <div className="details">
                        DESTINATION OF SHIPMENT
                        </div>
                        <div  className="ui left icon large input">
                        <input style={{height:"4rem",borderRadius:"0"}} type="text" placeholder="Country,City,Port"/>
                        <i className="arrow alternate green circle down icon"></i>
                        </div>
                        </div>
                        
                        <div className="single">
                        <div className="details">
                        READY TO LOAD
                        </div>
                        <div className="ui left icon large input">
                        <input style={{height:"4rem",width:"180px",borderRadius:"0"}} type="text" placeholder="Date"/>
                        <i className="calendar alternate greyoutline icon"></i>
                        </div>
                        </div>
                        
                        <div className="single">
                        <div className="details">
                        TYPE OF SHIPMENT
                        </div>
                        <div className="ui left large icon input">
                        <input style={{height:"4rem",width:"180px",borderRadius:"0",borderTopRightRadius:".3rem",borderBottomRightRadius:".3rem"}} type="text" placeholder="Type"/>
                        <i className="archive type red icon"></i>
                        </div>
                        </div>
        
                        <div className="single  blue" >
                        <br/>
                        <button onClick={()=>alert("Login to use search")} className="search"style={{height:"4rem",fontSize:"1.5",fontWeight:"300",width:"180px",margin:"auto"}}className="ui blue big button">
                        SEARCH
                        </button>
                        </div>
                        </div>
                        </Zoom>
                       </div>
                       <div style={{display:`${this.state.containerSearch}`}}>
                        <Zoom >
                        <div  className="inputs">
                    
                   
                        
                        <div className="single">
                        <div className="details">
                        CONTAINER NUMBER
                        </div>
                        <div class="ui left icon large input">
                        <input  style={{height:"4rem",borderRadius:0,borderTopLeftRadius:".3rem",borderBottomLeftRadius:".3rem",width:"400px"}}className="dhinkachika" type="text" placeholder="Container no."/>
                        <i class="arrow alternate blue circle up icon"></i>
                        </div>
                        </div>
                        
                        <div className="single">
                        <div className="details">
                        COMPANY
                        </div>
                        <div  className="ui left icon large input">
                        <input style={{height:"4rem",borderRadius:"0",width:"400px",borderTopRightRadius:".3rem",borderBottomRightRadius:".3rem"}} type="text" placeholder="Company"/>
                        <i className="arrow alternate green circle down icon"></i>
                        </div>
                        </div>
                        
                        
                        
        
                        <div className="single blue" >
                        <br/>
                        <button className="search"style={{height:"4rem",fontSize:"1.5",fontWeight:"300",width:"180px",margin:"auto",}}className="ui blue big button">
                        SEARCH
                        </button>
                        </div>
                        </div>
                        </Zoom>
                        </div>
                    
                        <div style={{paddingTop:"8rem" ,zIndex:"999"}} className="text second">
                        
                    <p>IndiaPort is a technology company closely working on shipping lines and custom brokers 
                        to provide you trouble free-trading. We at IndiaPort are commited to making it easier for the traders
                        to book transport, manage the shipment and solve problems in an organized and quick way.
                    </p>
                    </div>
                    
                   
                    
                   
                </div>
        )
    }
}
export default Home;