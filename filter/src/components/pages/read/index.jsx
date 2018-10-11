import React, { Component } from "react";
import Navigation from "../../global/navigation";
import Footer from "../../global/footer/";
import {Link} from "@reach/router";

import './read.css';

class Article extends Component
{
  state = {
    article: false,
    fields: false,
  }
  componentDidMount() {
    fetch(`http://localhost:8000/wp-json/Filter/v1/articles/${this.props.articleId}`)
    .then(response => response.json())
    .catch(error => {
      this.setState({
        error
      });
    })
    .then(data => {
      this.setState({
        article: data,
        fields: {
          content: data.fields.content,
        }
      })
    });
  }

  render(){
    return(

      <div className="Read">
        <Navigation />

        <h2 className="read-title">{this.state.article.post_title}</h2>
        <div className="titleicons">
          <div className="icons Share"></div>
          <div className="icons like"></div>
        </div>

        <hr className="articledivide"/>
        <div className="content">
          {this.state.fields.content}
        </div>
        <div className="articleFooter">
          <Link to="/selection" className="icons back"></Link>
          <div className="icons likes"></div>
        </div>

      </div>
    )
  }
}
export default Article;
