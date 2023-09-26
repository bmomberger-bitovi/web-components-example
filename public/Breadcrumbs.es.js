import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
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
