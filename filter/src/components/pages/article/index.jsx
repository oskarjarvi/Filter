import React, { Component } from "react";
import Navigation from "../../global/navigation";
import Footer from "../../global/footer/";
import Button from "../../global/button";
import Heart from "../../sections/heart/";

import './article.css';

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
          summary: data.fields.summary,
          cover: data.fields.cover
        }
      })
    });
  }

  render(){
    return(

      <div className="Article">
        <Navigation />
        <div className="ArticlePreview">
        <div className="ArticleImage"><img src={this.state.fields.cover} /></div>
        <h2 className="title">{this.state.article.post_title}</h2>
        <hr className="articledivide"/>
        <div className="summary">
        {this.state.fields.summary}
        </div>
        <div className="articleButton">

        <Button name="Läs Reportage" url={this.state.article.ID}/>
        </div>
        </div>
        <Heart />
        <Footer />
      </div>
    )
  }
}
export default Article;
