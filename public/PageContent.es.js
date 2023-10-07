import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * @function PageContent
 * The PageContent React component implements a simple example static page content.
 * @parent components
 * @returns import("react").Element
 */
export default function PageContent() {
    return (_jsxs(_Fragment, { children: [_jsx("style", { jsx: true, children: `
        div {
          border: 1px solid black;
        }
      ` }), _jsx("div", { children: "This content is loaded dynamically" })] }));
}
