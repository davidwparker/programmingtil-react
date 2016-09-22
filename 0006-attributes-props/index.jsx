import React from 'react';
import ReactDOM from 'react-dom';

const NameComponent = ({name, another}) => {
  return (
    <div>
      {name}, {another}
    </div>
  );
};

ReactDOM.render(
  <div>
    <NameComponent name="name is an attribute" another="so is another"/>
    <NameComponent name="" another="neither is required"/>
    <NameComponent />
  </div>,
  document.getElementById('root')
);
