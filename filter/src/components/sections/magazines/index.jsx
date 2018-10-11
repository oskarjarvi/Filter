import React, { Component } from "react";
import DisplayBox from '../../displaybox';

import './magazines.css';

class Magazines extends Component
{
  state = {
    magazines: false,
  }
  componentDidMount() {
    fetch("http://localhost:8000/wp-json/Filter/v1/magazines/")
      .then(response => response.json())
      .catch(error => {
        this.setState({
          error
        });
      })
      .then(data => {
        this.setState({
          magazines: data
        });
      });
  }

  render(){

    return(
    <div className="Magazines">
      {this.state.magazines ? this.state.magazines.map((magazine, i)=> <DisplayBox link = {magazine.fields.link}  url={magazine.fields.image ? magazine.fields.image.url : ''} key={i}/>) : ''}
    </div>
    )
  }
}
export default Magazines;
