import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired,
  // children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

class SomeComponent extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

SomeComponent.propTypes = propTypes;

export default SomeComponent;
