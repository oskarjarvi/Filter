import React, { Component } from "react";
import {Link} from "@reach/router";
import HamburgerMenu from "react-hamburger-menu";

import "./navigation.css";

class Navigation extends Component
{
  state = {
    open : false,
  };
  handleClick()
  {
    this.setState({
           open: !this.state.open
       });
  }
  render()
  {
    return(
      <div className="navbar">
        <div className="filterIcon"></div>
        <div className="hamburgerIcon">
          <HamburgerMenu isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={40}
            height={30}
            strokeWidth={2}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}/>
          </div>
        <div className={this.state.open ? "hamburgerNav open" : "hamburgerNav closed"}>
          <nav>
            <Link to="login">Logga In</Link>
            <Link to="about">Om oss</Link>
            <Link to="subscribe">Prenumerera</Link>
            <Link to="Shop">Shop</Link>
            <Link to="Adds">Annonsera</Link>
            <Link to="Podcast">Podcast</Link>
            <Link to="Contact">Kontakt</Link>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navigation;
