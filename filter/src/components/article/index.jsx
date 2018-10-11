import React, { Component } from "react";
import './article.css';

class Article extends Component
{
  state = {
    article: false,
  }
  componentDidMount() {
    fetch(`http://localhost:8000/wp-json/Article/v1/articles/${this.props.articleId}`)
      .then(response => response.json())
      .catch(error => {
        this.setState({
          error
        });
      })
      .then(data => {
        this.setState({
          article: data
        });
      });
  }

  render(){


    return(
    <div className="Article">
      <p> this.state.article.fields.content</p>
    </div>
    )
  }
}
export default Article;
