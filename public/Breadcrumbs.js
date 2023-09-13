import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function Breadcrumbs({ routeRoot = "/", initialRoute }) {
    const [currentRoute, setCurrentRoute] = useState("/");
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
    return (_jsx("ul", { children: ["Home", ...currentRoute.split("/")].map((el, idx) => (_jsxs("li", { children: [idx !== 0 && _jsx("span", { children: " / " }), el] }, `breadcrumb-${el}-${idx}`))) }));
}
