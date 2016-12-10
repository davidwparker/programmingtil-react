import React, { Component } from 'react';

class Nothing extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleClick() {
    this.setState(prevState => (prevState));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Nothing</button>
      </div>
    )
  }
}

export default Nothing;
