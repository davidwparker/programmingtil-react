var HelloReact = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
ReactDOM.render(
  <HelloMessage name="React" />,
  document.getElementById('root')
);
