import React, { Component } from 'react';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import NameForm from './NameForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameForm />
        <EssayForm />
        <FlavorForm />
      </div>
    );
  }
}

export default App;
