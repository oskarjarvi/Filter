import React, { Component } from "react";
import Navigation from "../../global/navigation";
import Info from "../../sections/info";
import Form from "../../sections/form";
import Start from "../../sections/start";
import Footer from "../../global/footer";
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
