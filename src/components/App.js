import React from "react"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import Navbar from "./Navbar"
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


class App extends React.PureComponent  {
    
    
    render() {
    return(
        <div>
      
            
            <Router>
            <Navbar>
            <Switch>
            <Route exact path="/"  component={HomePage} />
            <Route path="/about" component={AboutPage}/>
            </Switch>
            </Navbar>
            </Router>
           
        </div>
        ) }
}

export default App;
