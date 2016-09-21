// es6 style imports
import React from 'react';
import ReactDOM from 'react-dom';

// es6 const arrow function stateless react component
const HelloMessage = ({name}) => {
  return <div>Hello {name}!!!</div>;
};

ReactDOM.render(
  <HelloMessage name="React with es6" />,
  document.getElementById('root')
);
