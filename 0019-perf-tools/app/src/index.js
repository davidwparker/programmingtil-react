import Perf from 'react-addons-perf';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

window.Perf = Perf;
Perf.start();
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
Perf.stop();

// Get the measurements after stopping
const measurements = Perf.getLastMeasurements();

// Print overall time taken
Perf.printInclusive(measurements);

// Print time that doesn't count mounting components:
//   (componentDidMount, componentWillMount, etc)
// Perf.printExclusive(measurements);

// Print underlying DOM manipulations
// Perf.printOperations(measurements);

// DEPRECATED: Alias for printOperations
// Perf.printDOM(measurements);

// "Wasted" time is spent on components that didn't actually render anything,
// e.g. the render stayed the same, so the DOM wasn't touched.
Perf.printWasted(measurements);
