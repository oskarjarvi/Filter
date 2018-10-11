import React, { Component } from "react";
import "./socialmedia.css";


class SocialMedia extends Component
{
  render(){
    return(
      <div className="SocialMedia">
      <a><div className="facebook icon"></div></a>
      <a><div className="instagram icon"></div></a>
      <a><div className="twitter icon"></div></a>
      </div>
    )
  }
}
export default SocialMedia;
