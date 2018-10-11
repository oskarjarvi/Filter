import React, { Component } from "react";
import Button from "../button";

import "./info.css";

class Info extends Component {

  render() {

    return (
      <div className="info">
        <div className="More">
          <h2>För Dig som vill läsa mer!</h2>
          <p>Du får Sveriges bästa läsning både digitalt och hem i brevlådan.</p>
        </div>
        <div className="Why">
          <div className="checkbox"></div><p>Filter i brevlådan och tillgång till allt vårt publicerade webbinnehåll.</p>
          <div className="checkbox"></div><p>Du betalar 78kr varannan månad (månadspris 39kr)</p>
          <div className="checkbox"></div><p>Löpande prenumeration. Avsluta när du vill.</p>
        </div>
        <div className="How">
          <p>Läs överallt</p>
          <div className="devices"></div>
          <hr />
          </div>
            <div className="read">
              <p className="first">Läst allt för</p>
              <h1>39kr</h1>
              <p className="last">i månaden</p>
            </div>
          <div className="getStarted">
            <hr />
          <Button name="Kom igång nu!" url="/"/>
          <hr />
          </div>

      </div>
    );
  }
}

export default Info;
