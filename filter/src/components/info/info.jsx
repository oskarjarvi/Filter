import React, { Component } from "react";
import Button from "../button/button";

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
          <p>Filter i brevlådan och tillgång till allt vårt publicerade webbinnehåll.</p>
          <p>Du betalar 78kr varannan månad (månadspris 39kr)</p>
          <p>Löpande prenumeration. Avsluta när du vill.</p>
        </div>
        <div className="How">
          <div className="part">
            <h2>Steg 1</h2>
            <p>Lorem ipsum dolor sit amet, ex mel quidam dictas philosophia, legere scriptorem signiferumque ut sit. Accumsan nominavi te quo, quo ne quas noluisse. Nam recteque interesset conclusionemque ut. Est ex ponderum insolens, ut eum oporteat apeirian, eos at nostrum urbanitas.</p>
          </div>
          <hr />
            <div className="part">
              <h2>Steg 2</h2>
              <p>Lorem ipsum dolor sit amet, ex mel quidam dictas philosophia, legere scriptorem signiferumque ut sit. Accumsan nominavi te quo, quo ne quas noluisse. Nam recteque interesset conclusionemque ut. Est ex ponderum insolens, ut eum oporteat apeirian, eos at nostrum urbanitas.</p>
            </div>
            <hr />
              <div className="part">
                <h2>Steg 3</h2>
                <p>Lorem ipsum dolor sit amet, ex mel quidam dictas philosophia, legere scriptorem signiferumque ut sit. Accumsan nominavi te quo, quo ne quas noluisse. Nam recteque interesset conclusionemque ut. Est ex ponderum insolens, ut eum oporteat apeirian, eos at nostrum urbanitas.</p>
              </div>
              <hr />
                <Button name="Kom igång nu!" url="/"/>
              </div>
            </div>
          );
        }
      }

      export default Info;
