import React, { Component } from "react";
import Navigation from "../../navigation";
import Footer from "../../footer";
import Magazines from "../../magazines";
import Articles from "../../articles";
import './selection.css';

class Selection extends Component
{
  render(){

    return(
      <div className="selection">
        <Navigation />

        <div className="wrapper">
          <p>Magasinet Filter</p>
          <Magazines />

        </div>
<hr />

        <div className="wrapper">
          <p>Artiklar</p>
          <Articles />
          <hr />
        </div>

        <Footer />
      </div>
    )
  }
}
export default Selection;
