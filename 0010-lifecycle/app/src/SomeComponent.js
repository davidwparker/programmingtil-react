import React, { Component } from 'react';

class SomeComponent extends Component {

  // Mounting Methods
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  // Updating Methods
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  render() {
    const { hello } = this.props;
    console.log('render');
    return (
      <div>
        {hello.toString()}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  // Unmounting Methods
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

export default SomeComponent;
