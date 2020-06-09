import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Navbar from "./Navbar";
import Blog from "./Blog"
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Cbm from "./Cbm";
import DutyCalculator from "./DutyCalculator"

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Router>
          <Navbar>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/cbm" exact component={Cbm} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/dutycalculator" exact component={DutyCalculator} />
              <Route path="/blog" exact component={Blog}/>
            </Switch>
          </Navbar>
        </Router>
      </div>
    );
  }
}

export default App;
