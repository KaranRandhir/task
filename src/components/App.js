import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Navbar from "./Navbar";
import Blog from "./Blog"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cbm from "./Cbm";
import DutyCalculator from "./DutyCalculator"
import BlogPage from "./BlogPage"

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
              <Route path="/blog/:id" exact component={BlogPage}/>
            </Switch>
          </Navbar>
        </Router>
      </div>
    );
  }
}

export default App;
