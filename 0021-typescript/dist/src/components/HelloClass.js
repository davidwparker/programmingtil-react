"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var HelloClass = (function (_super) {
    __extends(HelloClass, _super);
    function HelloClass() {
        return _super.apply(this, arguments) || this;
    }
    HelloClass.prototype.render = function () {
        return React.createElement("h1", null,
            "Hello from ",
            this.props.compiler,
            " and ",
            this.props.framework,
            "!");
    };
    return HelloClass;
}(React.Component));
exports.HelloClass = HelloClass;
//# sourceMappingURL=HelloClass.js.map