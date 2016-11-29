import React, {
  Component
  // , PureComponent
} from 'react';

// class SomeComponent extends PureComponent {
class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    // A typical shallow comparison
    if (this.props.color !== nextProps.color) {
      console.log('props color');
      return true;
    }
    if (this.state.count !== nextState.count) {
      console.log('state count');
      return true;
    }
    
    console.log('false');
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default SomeComponent;
