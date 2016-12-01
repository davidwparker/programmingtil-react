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
    this.setState(prevState => ({
      groceries: [...prevState.groceries, 'chicken'],
    }));
  }

  // experimental syntax
  handleLinkClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      groceries: [...prevState.groceries, 'butter'],
    }));
  }

  handleOtherClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      groceries: [...prevState.groceries, 'celery'],
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add Chicken</button>
        <a href="#" onClick={this.handleLinkClick}>Add butter</a>
        <a href="#" onClick={(e) => this.handleOtherClick(e)}>Add celery</a>
        <ListComponent groceries={this.state.groceries} />
      </div>
    );
  }
}

export default Groceries;
