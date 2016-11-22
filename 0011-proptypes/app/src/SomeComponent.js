import React, { Component, PropTypes } from 'react';

export class Thing {
}

const propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: PropTypes.node,

  // A React element.
  optionalElement: PropTypes.element,

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalThing: PropTypes.instanceOf(Thing),

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),


  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string
  }),
};

// const propTypes = {
//   optionalArray: PropTypes.array.isRequired,
//   optionalBool: PropTypes.bool.isRequired,
//   optionalFunc: PropTypes.func.isRequired,
//   optionalNumber: PropTypes.number.isRequired,
//   optionalObject: PropTypes.object.isRequired,
//   optionalString: PropTypes.string.isRequired,
//   optionalSymbol: PropTypes.symbol.isRequired,
//   optionalNode: PropTypes.node.isRequired,
//   optionalElement: PropTypes.element.isRequired,
//   requiredAny: PropTypes.any.isRequired,
//   optionalThing: PropTypes.instanceOf(Thing).isRequired,
//   optionalEnum: PropTypes.oneOf(['News', 'Photos']).isRequired,
//   optionalUnion: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]).isRequired,
//   optionalArrayOf: PropTypes.arrayOf(PropTypes.number).isRequired,
//   optionalObjectOf: PropTypes.objectOf(PropTypes.number).isRequired,
//   optionalObjectWithShape: PropTypes.shape({
//     color: PropTypes.string
//   }).isRequired,
//   // You can also specify a custom validator. It should return an Error
//   // object if the validation fails. Don't `console.warn` or throw, as this
//   // won't work inside `oneOfType`.
//   customProp: function(props, propName, componentName) {
//     if (!/matchme/.test(props[propName])) {
//       return new Error(
//         'Invalid prop `' + propName + '` supplied to' +
//         ' `' + componentName + '`. Validation failed.'
//       );
//     }
//   },
//
//   // You can also supply a custom validator to `arrayOf` and `objectOf`.
//   // It should return an Error object if the validation fails. The validator
//   // will be called for each key in the array or object. The first two
//   // arguments of the validator are the array or object itself, and the
//   // current item's key.
//   customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
//     if (!/matchme/.test(propValue[key])) {
//       return new Error(
//         'Invalid prop `' + propFullName + '` supplied to' +
//         ' `' + componentName + '`. Validation failed.'
//       );
//     }
//   })
// }

const defaultProps = {
  // optionalNumber: 9,
  // optionalElement: <div>Nooo</div>,
};

class SomeComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        This is the component.
      </div>
    );
  }
}

SomeComponent.defaultProps = defaultProps;
SomeComponent.propTypes = propTypes;

export default SomeComponent;
