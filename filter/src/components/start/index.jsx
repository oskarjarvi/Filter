import React, { Component } from "react";
import Button from "../button";

import './start.css'

class Start extends Component
{
  render(){

    return(
      <div className="welcome">
        <h1>Välkommen</h1>
         <h3>till</h3> <p className="FilterLogo"></p>

      <div className="buttons">
        <Button name="Logga In" url="/selection"/>
        <Button name="Bli Medlem" url="/form"/>
      </div>
      <div className="smallInfo">
        <p>Glömt lösenord?</p>
        <p>Användarvillkor & sekretesspolicy</p>
      </div>
    </div>

    )
  }
}
export default Start;
