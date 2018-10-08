import React, { Component } from 'react';
import Main from './components/pages/Main/main';
import Selection from './components/pages/selection/selection';
import {Router} from '@reach/router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Main path="/" />
          <Selection path="/selection" />
        </Router>
      </div>
    );
  }
}

export default App;
