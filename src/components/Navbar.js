import React from "react"
import './Navbar.css'
import Nav1 from "./Nav1"
import Nav2 from "./Nav2"
import SideMenu from "./SideMenu"

class Navbar extends React.PureComponent {
  state = {width:"0"}

  renderSidebar = () => {
      this.setState({width :""})
  }
  hideSidebar = () => {
    this.setState({width :"0"})
  }
  render() {
    return (
      <div>
        
        <div onClick={()=>this.hideSidebar()} className="one">
          <Nav1/>
        </div>
        
        <div onClick={this.state.width===""?()=>this.hideSidebar():null} className="two" >
          <Nav2   onPress={this.renderSidebar}/>
        </div>
        
        <div className="three">
          <SideMenu  width={this.state.width} onPress={this.hideSidebar}/>
        </div>

        <div onClick={() => this.setState({width:"0"})}>
          {this.props.children}
        </div>

      </div>

    )
  }
}
export default Navbar;
