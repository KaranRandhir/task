import React from "react"
import Navbar from "./Navbar"
import Container from "./Container"
import Home from "./Home"
import InfoCard from "./InfoCard"
import Services from "./Services"
import Footer from "./Footer"
const App = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <Home/>
                <InfoCard/>
                <Services/>
            </Container>
            <Footer/>
        </div>
    )
}

export default App;