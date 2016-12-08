import React, { Component } from 'react';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.
    // Use this pattern instead of this.refs.myRefName
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}

// function CustomInput(props) {
//   // textInput must be declared here so the ref callback can refer to it
//   let textInput = null;
//
//   function handleClick() {
//     textInput.focus();
//   }
//
//   return (
//     <div>
//       <input
//         type="text"
//         ref={(input) => { textInput = input; }} />
//       <input
//         type="button"
//         value="Focus the text input"
//         onClick={handleClick}
//       />
//     </div>
//   );
// }

export default CustomInput;
