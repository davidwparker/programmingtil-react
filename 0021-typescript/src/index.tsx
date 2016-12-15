import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { HelloClass } from "./components/HelloClass";

ReactDOM.render(
  // <Hello compiler="TypeScript" framework="React" />,
  <Hello compiler="TypeScript" />,
  // <HelloClass compiler="TypeScript" framework="React" />,
  // <HelloClass compiler="TypeScript" />,
  document.getElementById("example")
);
