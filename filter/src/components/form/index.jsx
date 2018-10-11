import React, { Component } from "react";
import Button from "../button";
import "./form.css";

class formula extends Component
{

  render() {

    return (
      <div className="Form">
        <h2>Skapa ditt konto</h2>
        <form>
          <input className="form-control" type="text" name="name" placeholder="Användarnamn"required />
          <input className="form-control" type="email" name="email" placeholder="E-postadress"required />
          <input className="form-control" type="password" name="password" placeholder="Lösenord" required />
          <input className="form-control" type="password" name="password_confirmation" placeholder="Bekräfta Lösenord" required />

          </form>
            <Button id="create" name="Skapa Konto" url="/"/>
        </div>
          );
        }
}

export default formula;
