import React, { Component } from "react";
import Button from "../button/button";

import './start.css'

class Start extends Component
{
  render(){

    return(
      <div className="welcome"><h1>Välkommen</h1> <h3>till</h3> <div className="FilterLogo"></div>
      <div className="login">
        <input className="form-control" type="text" name="name" placeholder="E-postadress"required />
        <input className="form-control" type="text" name="name" placeholder="Lösenord"required />
        </div>
      <div className="buttons">
        <Button name ="Logga In" url=""/>
        <Button name ="Bli Medlem" url="/form"/>
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
