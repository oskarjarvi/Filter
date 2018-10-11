import React, { Component } from "react";
import Navigation from "../../navigation";
import Info from "../../info";
import Form from "../../form";
import Start from "../../start";
import Footer from "../../footer";
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
         <Start />
         <Info />
         <Form />
        <Footer />

    </div>
  );
}
}

export default Main;
