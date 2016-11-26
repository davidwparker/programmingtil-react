import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    const {
      name,
      num,
      // others,
    } = this.props;
    // console.log(others);
    return (
      <div>
        Child {num} {name}
      </div>
    );
  }
}

export default ChildComponent;
