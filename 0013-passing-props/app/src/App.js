import React, { Component } from 'react';
import SomeComponent from './SomeComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SomeComponent />
        <SomeComponent name="name"/>
        <SomeComponent name="name" x="x" y="y" />
        <SomeComponent name="name" z="z" />
      </div>
    );
  }
}

export default App;
