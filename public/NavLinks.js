import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function NavLinks({ routeRoot = "/", initialRoute }) {
    const [currentRoute, setCurrentRoute] = useState(initialRoute);
    useEffect(() => {
        const handler = (ev) => {
            if (ev.data.url.startsWith(routeRoot)) {
                setCurrentRoute(ev.data.url.replace(routeRoot, ""));
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
        const wrapped = new CustomEvent("routerequest", {
            bubbles: true
        });
        wrapped.data = {
            href
        };
        wrapped.originalEvent = ev;
        ev.target.dispatchEvent(wrapped);
    };
    const requestPrefetch = (ev) => {
        const href = ev.target.getAttribute("href");
        // ev.preventDefault();
        const wrapped = new CustomEvent("prefetchrequest", {
            bubbles: true
        });
        wrapped.data = {
            href
        };
        wrapped.originalEvent = ev;
        ev.target.dispatchEvent(wrapped);
    };
    return (_jsxs(_Fragment, { children: [_jsx("style", { jsx: true, children: `
        li.selected {
          background-color: blue;
        }
        li.selected * {
          color: white;
        }
      ` }), _jsxs("ul", { children: [_jsx("li", { className: currentRoute === "foo/bar" ? "selected" : "", children: _jsx("a", { href: "/foo/bar", onClick: requestRouteChange, children: "Nav to /foo/bar" }) }), _jsx("li", { className: currentRoute === "baz" ? "selected" : "", children: _jsx("a", { href: "/baz", onClick: requestRouteChange, children: "Nav to /baz" }) }), _jsx("li", { className: currentRoute === "content" ? "selected" : "", children: _jsx("a", { href: "/content", onMouseOver: requestPrefetch, onClick: requestRouteChange, children: "Nav to /content with dynamic content" }) }), _jsx("li", { className: currentRoute === "invalid-route" ? "selected" : "", children: _jsx("a", { href: "/invalid-route", onClick: requestRouteChange, children: "This nav is invalid" }) })] })] }));
}
