"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Breadcrumbs({ routeRoot = "/", initialRoute, tokens = { $title: "Home" } }) {
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
    const routeNames = [];
    let currentLevel = { home: tokens, $title: "" };
    ["home", ...(currentRoute ?? "").split("/")].forEach(pathEl => {
        if (pathEl !== "") {
            currentLevel = currentLevel?.[pathEl];
            routeNames.push(currentLevel && currentLevel.$title ? currentLevel.$title : pathEl);
        }
    });
    return ((0, jsx_runtime_1.jsx)("ul", { children: routeNames.map((el, idx) => ((0, jsx_runtime_1.jsxs)("li", { children: [idx !== 0 && (0, jsx_runtime_1.jsx)("span", { children: " / " }), el] }, `breadcrumb-${el}-${idx}`))) }));
}
exports.default = Breadcrumbs;
