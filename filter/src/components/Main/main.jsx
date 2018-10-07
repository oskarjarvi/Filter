import React, { Component } from "react";
import Navigation from "../navigation/navigation";
import Button from "../button/button";
import Info from "../info/info";
import Form from "../form/form";
import Start from "../start/start";
import Footer from "../footer/footer";
import Articles from "../articles/articles";
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
        <Articles />
        {/* <Start />
         <Info />
         <Form /> */
         }
        <Footer />

    </div>
  );
}
}

export default Main;
