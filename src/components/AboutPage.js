import React from "react"
import "./aboutpage.css"
import team from "../assets/team.svg"
import work from "../assets/work.svg"
import team2 from "../assets/team2.svg"
import skyline from "../assets/skyline.png"
import crane from "../assets/crane.png"
class AboutPage extends React.Component {
    render(){
        return(
            
            <div className="aboutpage">
                <div className="heading">
                    We are tech start-up powered to <br/>
                    tranform import export
                    <div className="services">
                        <div className="row">
                            <div className="list">
                                <ul>
                                    <li className="topic">Services</li>
                                    <li>Online freight marketplace</li>
                                    <li>Custom clearance </li>
                                    <li>Local transport</li>
                                    <li>Break and Bulk cargo</li>
                                    <li>Insurance</li>
                                </ul>
                            </div>

                            <div className="list">
                                <ul>
                                    <li className='topic'>Updates</li>
                                    <li>Education</li>
                                    <li>Blogs</li>
                                    <li>News</li>
                                    <li>Vessel Schedule</li>
                                  
                                </ul>
                            </div>

                            <div className="list">
                                <ul>
                                    <li className="topic">Tools</li>
                                    <li>Custom docs generate</li>
                                    <li>Duty calculator </li>
                                    <li>CBM calculator</li>
                                    <li>Conatiner Tracking</li>
                                    <li>Professional quote system</li>
                                </ul>
                            </div>

                            <div className="list">
                                <ul>
                                    <li className="topic">Data</li>
                                    <li>HS code finder</li>
                                    <li>Export data </li>
                               
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                        <div className="list">
                                <ul>
                                    <li className='topic'>Freight Search</li>
                                    <li>Sea</li>
                                    <li>Air </li>
                                    <li>Local transport</li>
                                    <li>LCL container</li>
                                    <li>Breakbulk Cargo</li>
                                    
                                </ul>
                            </div>
                            <div style={{marginLeft:"3.8vw"}}className="list">
                                <ul>
                                    <li className='topic'>Extra</li>
                                    <li>Pay later with credit</li>
                                  
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aboutfooter">
                 <div className="indiaport">
                 <div style={{display:"flex"}}>
        <img style={{width:"3.5rem"}} src={crane} className="crane"/>
          <div style={{marginLeft:".5vw"}}>
          <div className="title">
          IndiaPort<br/>
          </div>
          <div className="tagline">
          Simplifying Boundaries
          </div>
          </div>
          </div>
                 </div>
                 <div style={{position:"absolute",bottom:"0",right:"0"}}>
                    Privacy ©️ 2020 Indiaport
                </div>
                 <div>
                 <img src={skyline}/>
                </div>
                <div style={{marginTop:"5vh"}} className="title">
                  India
                </div>
                <div style={{marginTop:"3vh"}} className="adress">
                    406 B, Glitz Mall, Marine Line,<br/>
                    Mumabai, Maharashtra 400002
                </div>
                </div>
               
                

            </div>

        )
    }
}

export default AboutPage;