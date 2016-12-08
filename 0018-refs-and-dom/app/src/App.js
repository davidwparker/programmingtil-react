import React, { Component } from 'react';
import CustomInput from './CustomInput';
import './App.css';

class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <CustomInput
        ref={(input) => { this.textInput = input; }} />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CustomInput /> */}
        <AutoFocusTextInput />
      </div>
    );
  }
}

export default App;
