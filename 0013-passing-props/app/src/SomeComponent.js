import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class SomeComponent extends Component {
  render() {
    const { name, ...others } = this.props;
    return (
      <div>
        Parent { name }
        <br />
        <ChildComponent name={name} num={1} />
        <ChildComponent name={name} num={2} others={others} />
      </div>
    );
  }
}

export default SomeComponent;
