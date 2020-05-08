import React from "react"
import './Navbar.css'
const Navbar = () => {
    return (
        
        <div class="ui borderless menu">
        <div class="header item company">
          <div className="title">
          INDIAPORT<br/>
          </div>
          <div className="tagline">
          Simplifying Boundaries
          </div>
        </div>
        <div className="menu right"> 
        <a className="item light">
          Home.
        </a>
        <a className="item light">
          Products.
        </a>
        <a className="item light ">
          Tools.
        </a>
        <a className="item light">
          Support.
        </a>
        <a className="item login light">
          Log in/Sign up.
        </a>

        </div>
      </div>
      

    )
}

export default Navbar;