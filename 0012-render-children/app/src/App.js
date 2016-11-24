import React, { Component } from 'react';
import SomeComponent from './SomeComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SomeComponent>
          <div>This component has a child</div>
        </SomeComponent>
        {/* <SomeComponent>
          <div>This component</div>
          <div>has children</div>
        </SomeComponent> */}
      </div>
    );
  }
}

export default App;
