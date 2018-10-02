import React, { Component } from "react";
import Navigation from "../navigation/navigation";

import "./main.css";

class Main extends Component {
  state = {
  };

  componentDidMount() {
    fetch("")
      .then(response => response.json())
      .catch(error => {
        this.setState({
          error
        });
      })
      .then(data => {
        this.setState({
          parties: data
        });
      });
  }

  render() {

    return (
      <div className="Main">
        <Navigation />
      </div>
    );
  }
}

export default Main;
