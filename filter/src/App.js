import React, { Component } from 'react';
import Main from './components/pages/Main';
import Selection from './components/pages/selection';
import Article from './components/pages/article';
import Read from './components/pages/read';
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
          <Read path="read/:articleId" />
        </Router>
      </div>
    );
  }
}

export default App;
