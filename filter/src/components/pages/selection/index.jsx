import React, { Component } from "react";
import Navigation from "../../global/navigation";
import Footer from "../../global/footer";
import Magazines from "../../sections/magazines";
import Articles from "../../sections/articles";
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
