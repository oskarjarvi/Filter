import React, { Component } from "react";

import './footer.css';
class footer extends Component
{
  render(){
    return(
      <div className="footer">
        <div className="footer_icon"></div>
      <ul className="list">
        <li>Om Filter</li>
        <li>Magasinet</li>
        <li>Annonsera</li>
        <li>Medarbetare</li>
        <li>Kontakt</li>
        <li>Reportage</li>
        <li>Podcast</li>
        <li>Shop</li>
      </ul>
    </div>
    )
  }
}
export default footer;
