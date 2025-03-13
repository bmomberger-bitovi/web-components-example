"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageContent;
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @function PageContent
 * The PageContent React component implements a simple example static page content.
 * @parent components
 * @returns import("react").Element
 */
function PageContent() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("style", { jsx: true, children: `
        div {
          border: 1px solid black;
        }
      ` }), (0, jsx_runtime_1.jsx)("div", { children: "This content is loaded dynamically" })] }));
}
