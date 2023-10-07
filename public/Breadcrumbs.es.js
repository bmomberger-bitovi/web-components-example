import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
/**
 * @functon Breadcrumbs
 * Breadcrumbs display the current route's path from home as static named path elements.
 * @parent components
 * @param  {String} props.routeRoot    the root of routing for this component
 * @param  {String} props.initialRoute the full application route at the time of initialization
 * @param  {Object} props.tokens       an object of names for each possible path of the routing tree,
 *                                     taking the form of a $title property for the string title of
 *                                     the current path element, and any property starting with a
 *                                     lowercase letter representing a possible value for the next
 *                                     path element.  An object like
 *                                     { $title: "Home", foo: { $title: "Roo" }, bar: { title: "Bar"}}
 *                                     will display "Home" for the "/" route, and "Home / Roo" for
 *                                     the "/foo" route.
 * @listens RouteChangeEvent
 * @returns import("react").Element
 */
export default function Breadcrumbs({ routeRoot = "/", initialRoute, tokens = { $title: "Home" } }) {
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
    const routeNames = [];
    let currentLevel = { home: tokens, $title: "" };
    ["home", ...(currentRoute ?? "").split("/")].forEach(pathEl => {
        if (pathEl !== "") {
            currentLevel = currentLevel?.[pathEl];
            routeNames.push(currentLevel && currentLevel.$title ? currentLevel.$title : pathEl);
        }
    });
    return (_jsx("ul", { children: routeNames.map((el, idx) => (_jsxs("li", { children: [idx !== 0 && _jsx("span", { children: " / " }), el] }, `breadcrumb-${el}-${idx}`))) }));
}
