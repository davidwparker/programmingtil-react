import React, { Component } from 'react';
import SomeComponent from './SomeComponent';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {status: true, visible: true};
    this.handleClick = this.handleClick.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => ({
      status: !prevState.status
    }));
  }

  handleToggleClick() {
    this.setState((prevState, props) => ({
      visible: !prevState.visible
    }));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>change state / hello prop</button>
        <button onClick={this.handleToggleClick}>Toggle Remove/Add Element</button>
        { this.state.visible ? <SomeComponent hello={this.state.status} />: <div />}
      </div>
    );
  }
}

export default App;
