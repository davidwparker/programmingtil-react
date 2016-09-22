import React from 'react';
import ReactDOM from 'react-dom';

const NameComponent = ({name}) => {
  return (
    <div>
      {name}
    </div>
  );
};

const isTrue = true;
const isFalse = false;

ReactDOM.render(
  <div>
    <NameComponent name={isTrue ? 'isTrue is true': 'isTrue is false'} />
    <NameComponent name={isFalse ? 'isFalse is true': 'isFalse is false'} />
    <input type="button" disabled value="disabled w/out attribute"/>
    <input type="button" disabled={isTrue} value="disabled w/js expression"/>
    <input type="button" disabled={isFalse} value="not disabled w/js expression"/>
    <input type="button" value="not disabled w/no disabled attribute"/>
    <div>
      {isTrue ? <NameComponent name="This one will be true!" />: <NameComponent name="unshown!" />}
      {isFalse ? <NameComponent name="unshown!" />: <NameComponent name="This one will be false!" />}
    </div>
  </div>,
  document.getElementById('root')
);
