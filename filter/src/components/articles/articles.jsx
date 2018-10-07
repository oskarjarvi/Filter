import React, { Component } from "react";
import Article from '..//article/article';
import './articles.css';

class Articles extends Component
{
  state = {
    arr :[
      {
        number: 1,
        img: 'https://i2.wp.com/magasinetfilter.se/wp-content/uploads/2018/09/filter64-18-omslag-1000px.jpg?zoom=1.5&fit=450%2C640&ssl=1'
      },
      {
        number: 2,
        img: 'https://i1.wp.com/magasinetfilter.se/wp-content/uploads/2018/07/filter63-omslag_1000px.jpg?zoom=1.5&fit=450%2C640&ssl=1',

      },
      {
        number: 3,
        img: 'https://i1.wp.com/magasinetfilter.se/wp-content/uploads/2018/07/filter63-omslag_1000px.jpg?zoom=1.5&fit=450%2C640&ssl=1',

      }
    ],
}

  render(){
    return(
    <div className="Articles">
      {this.state.arr ? this.state.arr.map((a, i)=> <Article url= {a.img} key={i}/>) : ''}
    </div>
    )
  }
}
export default Articles;
