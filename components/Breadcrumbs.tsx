import { useEffect, useState } from "react";

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
