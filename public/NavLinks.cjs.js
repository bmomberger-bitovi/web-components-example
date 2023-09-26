"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function NavLinks({ routeRoot = "/", initialRoute, onRouteRequest, onPrefetchRequest, }) {
    const [currentRoute, setCurrentRoute] = (0, react_1.useState)(initialRoute.startsWith(routeRoot)
        ? initialRoute.replace(routeRoot, "")
        : "");
    (0, react_1.useEffect)(() => {
        const handler = (ev) => {
            if (ev.detail.url.startsWith(routeRoot)) {
                setCurrentRoute(ev.detail.url.replace(routeRoot, ""));
            }
            else {
                setCurrentRoute("");
            }
        };
        document.addEventListener("routechange", handler);
        return () => {
            document.removeEventListener("routechange", handler);
        };
    }, []);
    const requestRouteChange = (ev) => {
        const href = ev.target.getAttribute("href");
        ev.preventDefault();
        const wrapped = Object.assign(new CustomEvent("routerequest", {
            bubbles: true,
            detail: { href }
        }), {
            originalEvent: ev
        });
        ev.target.dispatchEvent(wrapped);
        if (typeof onRouteRequest === "function") {
            onRouteRequest(href);
        }
    };
    const requestPrefetch = (ev) => {
        const href = ev.target.getAttribute("href");
        // ev.preventDefault();
        const wrapped = Object.assign(new CustomEvent("prefetchrequest", {
            bubbles: true,
            detail: {
                href
            }
        }), {
            originalEvent: ev
        });
        ev.target.dispatchEvent(wrapped);
        if (typeof onPrefetchRequest === "function") {
            onPrefetchRequest(href);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("style", { jsx: true, children: `
        li.selected {
          background-color: blue;
        }
        li.selected * {
          color: white;
        }
      ` }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { className: currentRoute === "foo/bar" ? "selected" : "", children: (0, jsx_runtime_1.jsx)("a", { href: "/foo/bar", onClick: requestRouteChange, children: "Nav to /foo/bar" }) }), (0, jsx_runtime_1.jsx)("li", { className: currentRoute === "baz" ? "selected" : "", children: (0, jsx_runtime_1.jsx)("a", { href: "/baz", onClick: requestRouteChange, children: "Nav to /baz" }) }), (0, jsx_runtime_1.jsx)("li", { className: routeRoot === "/content" ? "selected" : "", children: (0, jsx_runtime_1.jsx)("a", { href: "/content", onMouseOver: requestPrefetch, onClick: requestRouteChange, children: "Nav to /content with dynamic content" }) }), (0, jsx_runtime_1.jsx)("li", { className: currentRoute === "invalid-route" ? "selected" : "", children: (0, jsx_runtime_1.jsx)("a", { href: "/invalid-route", onClick: requestRouteChange, children: "This nav is invalid" }) })] })] }));
}
exports.default = NavLinks;
