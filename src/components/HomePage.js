import React from "react"

import Container from "./Container"
import Home from "./Home"
import InfoCard from "./InfoCard"
import Services from "./Services"
import Footer from "./Footer"
import Percent from "./Percent"
import Stats from "./Stats"
import Why from "./Why"
import Manage from "./Manage"


class HomePage extends React.PureComponent  {
    
    
    render() {
    return(
        <div>
            
           
            
            <Container>

                <Home/>
                <InfoCard/>
               <Stats/>
                <Services/>
                <Manage/>
                
            </Container>
            <Why/>
            <Footer/>


            
            </div>


            
      
    ) }
}

export default HomePage;
