import React, {
  Component
  , PureComponent
} from 'react';

class ListComponent extends PureComponent {
  render() {
    return <div>Groceries: {this.props.groceries.join(',')}</div>;
  }
}

class Groceries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries : ['strawberries', 'bananas']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    // Don't mutate state!
    // const groceries = this.state.groceries;
    // groceries.push('chicken');
    // this.setState({groceries});

    // Correct format here
    this.setState(prevState => ({
      // groceries: prevState.groceries.concat(['chicken'])
      groceries: [...prevState.groceries, 'chicken'],
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add Chicken</button>
        <ListComponent groceries={this.state.groceries} />
      </div>
    );
  }
}

export default Groceries;
