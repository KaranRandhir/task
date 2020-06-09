import React from "react"
import "./aboutpage.css"

import skyline from "../assets/gateway.svg"
import crane from "../assets/crane.png"
import office from "../assets/office.svg"
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
                    <img alt="office" src={office}/>
                </div>
                <div style={{marginBottom:"4rem"}}>
                    <div className="heading">
                        Our Team
                    </div>
                    <div className="team-items">
                    <div className="team-item">
                            <div className="team-item__heading">Sanesh Sagvekar</div>
                            <div className="team-item__position">Front & Back-end developer & photographer</div>
                        </div>
                        <div className="team-item">
                            <div className="team-item__heading">Vedant Kothari</div>
                            <div className="team-item__position">Founder & chef</div>
                        </div>
                        <div className="team-item">
                            <div className="team-item__heading">Karan Randhir</div>
                            <div className="team-item__position"> Front end developer & Guitarist</div>
                        </div>
                        <div className="team-item">
                            <div className="team-item__heading">Pramod Kodag</div>
                            <div className="team-item__position">Project manager & Singer</div>
                        </div>
                        <div className="team-item">
                            <div className="team-item__heading">Khayti Kothari</div>
                            <div className="team-item__position"> R&D business model and finance & snowboarding</div>
                        </div>
                        <div className="team-item">
                            <div className="team-item__heading">Zeba Barudgar</div>
                            <div className="team-item__position">Edu tech head & poet</div>
                        </div>
                        <div className="team-item">
                            <div className="team-item__heading">CA Abhishek shah</div>
                            <div className="team-item__position"> Financial services & Traveller</div>
                        </div>

                        
                    </div>
                </div>

                <div className="aboutfooter">
                 <div className="indiaport">
                 <div style={{display:"flex"}}>
        <img alt="crane" style={{width:"3.5rem"}} src={crane} className="crane"/>
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
                    Privacy <span role="img" aria-label="company">©️</span> 2020 Indiaport
                </div>
                 <div>
                 <img style={{width:"150px"}} alt="skyline" src={skyline}/>
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