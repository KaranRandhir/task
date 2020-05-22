import React from "react"
import "./aboutpage.css"
import team from "../assets/team.svg"
import work from "../assets/work.svg"
import team2 from "../assets/team2.svg"
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
                <div className="heading">
                    Meet The Team
                </div>
                <div className='row'>
                <img src={team} style={{height:"40vh"}}/>
                
                </div>
                <div className="heading">
                    Hi There !
                </div>
                    <div className="rowimg">
                    <div className="text1">
                        We are a team of professionals from Ukraine who believe in the power of collaboration, 
                        research, shaking old ways and patterns. We love working with good 
                        people on their amazing projects to help them rise sales,
                        achieve new business opportunities and succeed in their fields.
                        </div>
                        <img src={work} style={{height:"50vh"}}/>
                    </div>

            </div>

        )
    }
}

export default AboutPage;