import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
/**
 * @function NavLinks
 * The NavLinks React component implements a set of top-level navigation links which
 *  highlight based on the current route and generate route change request events
 *  on user interaction.
 * @parent components
 * @param  {String} props.routeRoot         the root of routing for this component
 * @param  {String} props.initialRoute      the full application route at the time of initialization
 * @returns import("react").Element
 */
export default function NavLinks({ routeRoot = "/", initialRoute, }) {
    const [currentRoute, setCurrentRoute] = useState(initialRoute.startsWith(routeRoot)
        ? initialRoute.replace(routeRoot, "")
        : "");
    useEffect(() => {
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
    };
    return (_jsxs(_Fragment, { children: [_jsx("style", { jsx: true, children: `
        li.selected {
          background-color: blue;
        }
        li.selected * {
          color: white;
        }
      ` }), _jsxs("ul", { children: [_jsx("li", { className: currentRoute === "foo/bar" ? "selected" : "", children: _jsx("a", { href: "/foo/bar", onClick: requestRouteChange, children: "Nav to /foo/bar" }) }), _jsx("li", { className: currentRoute === "baz" ? "selected" : "", children: _jsx("a", { href: "/baz", onClick: requestRouteChange, children: "Nav to /baz" }) }), _jsx("li", { className: routeRoot === "/content" ? "selected" : "", children: _jsx("a", { href: "/content", onMouseOver: requestPrefetch, onClick: requestRouteChange, children: "Nav to /content with dynamic content" }) }), _jsx("li", { className: currentRoute === "invalid-route" ? "selected" : "", children: _jsx("a", { href: "/invalid-route", onClick: requestRouteChange, children: "This nav is invalid" }) })] })] }));
}
