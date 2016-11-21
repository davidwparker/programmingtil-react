import React, { Component } from 'react';
import GroceriesComponent from './GroceriesComponent';
import SomeComponent from './SomeComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SomeComponent color="red" />
        <GroceriesComponent />
      </div>
    );
  }
}

export default App;
