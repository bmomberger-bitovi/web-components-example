import { useEffect, useState } from "react";

export interface RouteChangeEvent extends CustomEvent<{
  url: string;
}> {}

declare global {
  interface HTMLElementEventMap {
    "routechange": RouteChangeEvent;
  }
}

export default function Breadcrumbs({
  routeRoot = "/",
  initialRoute
}: {
  routeRoot: string;
  initialRoute: string;
}) {
  console.log("Updating breadcrumbs:", initialRoute, "-- routeRoot is: ", routeRoot)
  const [currentRoute, setCurrentRoute] = useState(
    initialRoute.startsWith(routeRoot)
    ? initialRoute.replace(routeRoot, "")
    : ""
  );

  useEffect(() => {
    const handler = (ev) => {
      console.log("Received routechange:", ev.detail.url, "-- routeRoot is: ", routeRoot)

      if (ev.detail.url.startsWith(routeRoot)) {
         setCurrentRoute(ev.detail.url.replace(routeRoot, ""));
      } else {
        setCurrentRoute("");
      }
    };
    document.addEventListener("routechange", handler);
    
    return () => {
      document.removeEventListener("routechange", handler);
    }

  }, [])

  return (
    <ul>
      {
        ["Home", ...(currentRoute ?? "").split("/")].filter(route => route !== "").map((el, idx) => (
          <li key={`breadcrumb-${el}-${idx}`}>
            {idx !== 0 && <span> / </span>}
            {el}
          </li>
        ))
      }
    </ul>
  );
}
