import { useEffect, useState } from "react";

/**
 * Event reporting that the application route has changed.
 *
 * @event RouteChangeEvent
 * @property {string} url - The new route's path, not including origin (root-relative)
 */

export interface RouteChangeEvent extends CustomEvent<{
  url: string;
}> {}

declare global {
  interface HTMLElementEventMap {
    "routechange": RouteChangeEvent;
  }
}

type letter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z"
type cash = `$${string}`;
type nocash = `${letter}${string}`
export interface BreadcrumbNames {
  $title: string;
  [key: nocash]: BreadcrumbNames;
}

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
export default function Breadcrumbs({
  routeRoot = "/",
  initialRoute,
  tokens = { $title: "Home" }
}: {
  routeRoot: string;
  initialRoute: string;
  tokens: BreadcrumbNames;
}) {
  const [currentRoute, setCurrentRoute] = useState(
    initialRoute.startsWith(routeRoot)
    ? initialRoute.replace(routeRoot, "")
    : ""
  );

  useEffect(() => {
    const handler = (ev) => {
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

  const routeNames = [];
  let currentLevel: BreadcrumbNames = { home: tokens, $title: "" };
  ["home", ...(currentRoute ?? "").split("/")].forEach(pathEl => {
    if(pathEl !== "") {
      currentLevel = currentLevel?.[pathEl]
      routeNames.push(currentLevel && currentLevel.$title ? currentLevel.$title : pathEl);
    }
  })

  return (
    <ul>
      {
        routeNames.map((el, idx) => (
          <li key={`breadcrumb-${el}-${idx}`}>
            {idx !== 0 && <span> / </span>}
            {el}
          </li>
        ))
      }
    </ul>
  );
}
