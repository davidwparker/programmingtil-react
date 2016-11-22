import React, { Component } from 'react';
import SomeComponent, { Thing } from './SomeComponent';
import './App.css';

function func() {
  return true;
}

const thing = new Thing();

class App extends Component {
  render() {
    const array = [1,2,3];
    const obj = {};
    const sym = Symbol("hi");
    return (
      <div className="App">
        <SomeComponent />
        {/* <SomeComponent
          optionalArray={array}
          optionalBool={true}
          optionalFunc={func}
          optionalObject={obj}
          optionalString='somebody!'
          optionalSymbol={sym}

          optionalNode={<div />}

          requiredAny="anything"

          optionalThing={thing}
          optionalEnum="News"

          optionalUnion="string"
          optionalArrayOf={[1,2,3]}
          optionalObjectOf={{thing:123}}
          optionalObjectWithShape={{color:'red'}}

          customProp="matchme"

          customArrayProp={['matchme']}
        /> */}

        <br />
      </div>
    );
  }
}

export default App;
