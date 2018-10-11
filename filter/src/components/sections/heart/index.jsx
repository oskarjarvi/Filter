import React, { Component } from "react";
import SocialMedia from "../../global/socialmedia";
import "./heart.css";


class Heart extends Component
{
  render(){
    return(
      <div className="heart">
      <a><div className="heartIcon"></div></a>
      <p>Gillade du läsningen?</p>
      <p>Gilla reportaget med ett tryck på hjärtat!</p>
        <SocialMedia />
        <p>Hjälp fler att upptäcka detta reportaget</p>

      </div>
    )
  }
}
export default Heart;
