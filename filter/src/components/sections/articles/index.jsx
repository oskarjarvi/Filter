import React, { Component } from "react";
import DisplayBox from '../../displaybox';
import './articles.css';

class Articles extends Component
{
  state = {
    articles: false,
  }
  componentDidMount() {
    fetch("http://localhost:8000/wp-json/Filter/v1/articles/")
      .then(response => response.json())
      .catch(error => {
        this.setState({
          error
        });
      })
      .then(data => {
        this.setState({
          articles: data
        });
      });
  }

  render(){
    return(
    <div className="Articles">
      {this.state.articles ? this.state.articles.map((article, i)=> <DisplayBox link ={article.ID.toString()}  url={article.fields.image ? article.fields.image.url : ''} key={i}/>) : ''}
    </div>
    )
  }
}
export default Articles;
