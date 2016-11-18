import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // Notes about state:
  // Never modify directly
  // * this.state.thing = true // wrong!
  // * this.setState(thing: true) // correct!
  //
  // State updates may be asynchronous
  // Wrong!
  // this.setState({
  //   counter: this.state.counter + this.props.increment,
  // });
  // You can't rely on their state to calculate the next state
  // Use this version of setState which takes in a function instead
  // Correct!
  // this.setState((prevState, props) => ({
  //   counter: prevState.counter + props.increment
  // }));
  //
  // State Updates are Merged
  // this.state = {
  //   posts: [],
  //   comments: []
  // };
  // This will replace posts but leave comments intact
  // this.setState({
  //   posts: response.posts
  // });

  render() {
    return (
      <div className="App">
        <p>
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

export default App;
