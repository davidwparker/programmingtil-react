import React, { Component } from 'react';
import AutoFocusTextInput from './AutoFocusTextInput';
import CustomInput from './CustomInput';
import Nothing from './Nothing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomInput />
        <AutoFocusTextInput />
        <Nothing />
      </div>
    );
  }
}

export default App;
