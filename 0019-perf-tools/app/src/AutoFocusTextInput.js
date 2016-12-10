import React, { Component } from 'react';
import CustomInput from './CustomInput';

class AutoFocusTextInput extends Component {
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

export default AutoFocusTextInput;
