import React, { Component } from "react";
import Navigation from "../../global/navigation";
import Footer from "../../global/footer/";

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

      <div className="Article">
        <Navigation />
        <h2 className="title">{this.state.article.post_title}</h2>
        <hr className="articledivide"/>
        <div className="content">
        {this.state.fields.content}
        </div>
        <div className="articleButton">

        </div>
        <Footer />
      </div>
    )
  }
}
export default Article;
