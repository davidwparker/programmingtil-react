/* @flow */
import React, { Component } from 'react';
import Message from './Message';
import Timely from './Timely';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* // Missing message prop */}
        <Message />
        {/* // Ok! */}
        {/* <Message message="hi!"/> */}

        {/* // Missing all the required props */}
        {/* <Timely /> */}
        {/* // Missing date and excited */}
        {/* <Timely name='John' /> */}
        {/* // Missing date */}
        {/* <Timely name='John' excited={true} /> */}
        {/* // Ok! */}
        {/* <Timely date={new Date()} name='John' excited={true} /> */}
      </div>
    );
  }
}

export default App;
