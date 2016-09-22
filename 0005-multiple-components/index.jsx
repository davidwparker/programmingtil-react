import React from 'react';
import ReactDOM from 'react-dom';

const NameComponent = ({name}) => {
  return (
    <div>Name: {name}</div>
  );
};

ReactDOM.render(
  <div>
    <NameComponent name="component 1" />
    <NameComponent name="" />
    <NameComponent name="component 3" />
    <NameComponent />
  </div>,
  document.getElementById('root')
);
