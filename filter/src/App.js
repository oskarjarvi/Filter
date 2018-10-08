import React, { Component } from 'react';
import Main from './components/pages/Main';
import Selection from './components/pages/selection';
import Article from './components/article'
import {Router} from '@reach/router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Main path="/" />
          <Selection path="/selection" />
          <Article path="selection/:articleId" />
        </Router>
      </div>
    );
  }
}

export default App;
