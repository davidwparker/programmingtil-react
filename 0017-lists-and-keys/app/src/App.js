import React, { Component } from 'react';
import NumberList from './NumberList';
import './App.css';

const numbers = [1, 2, 3, 4, 5];

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberList numbers={numbers} />
        <NumberList numbers={numbers} />
      </div>
    );
  }
}

export default App;
