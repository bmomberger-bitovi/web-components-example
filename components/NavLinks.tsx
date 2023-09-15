import { useEffect, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import type { RouteChangeEvent } from "./Breadcrumbs";

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

export interface PrefetchRequestEvent extends CustomEvent<{
  href: string;
}> {
  originalEvent: ReactMouseEvent;
}

export interface RouteRequestEvent extends CustomEvent<{
  href: string;
}> {
  originalEvent: ReactMouseEvent;
}

declare global {
  interface HTMLElementEventMap {
    "prefetchrequest": PrefetchRequestEvent;
    "routerequest": RouteRequestEvent;
  }
}

export default function NavLinks({
  routeRoot = "/",
  initialRoute
}: {
  routeRoot: string;
  initialRoute: string;
}) {
  const [currentRoute, setCurrentRoute] = useState(
    initialRoute.startsWith(routeRoot)
    ? initialRoute.replace(routeRoot, "")
    : ""
  );

  useEffect(() => {
    const handler = (ev: RouteChangeEvent) => {
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

  const requestRouteChange = (ev: ReactMouseEvent) => {
    const href = (ev.target as HTMLElement).getAttribute("href") as string;
    ev.preventDefault();

    const wrapped: RouteRequestEvent = Object.assign(
      new CustomEvent("routerequest", {
        bubbles: true,
        detail: { href }
      }),
      {
        originalEvent: ev
      },
    )

    ev.target.dispatchEvent(wrapped);
  }

  const requestPrefetch = (ev: ReactMouseEvent) => {
    const href = (ev.target as HTMLElement).getAttribute("href") as string;
    // ev.preventDefault();

    const wrapped: PrefetchRequestEvent = Object.assign(
      new CustomEvent("prefetchrequest", {
        bubbles: true,
        detail: {
          href
        }
      }),
      {
        originalEvent: ev
      }
    );

    ev.target.dispatchEvent(wrapped);
  }

  return (
    <>
      <style jsx>{`
        li.selected {
          background-color: blue;
        }
        li.selected * {
          color: white;
        }
      `}</style>
      <ul>
        <li className={currentRoute === "foo/bar" ? "selected" : ""}>
          <a href="/foo/bar" onClick={requestRouteChange}>Nav to /foo/bar</a>
        </li>
        <li className={currentRoute === "baz" ? "selected" : ""}>
          <a href="/baz" onClick={requestRouteChange}>Nav to /baz</a>
        </li>
        <li className={routeRoot === "/content" ? "selected" : ""}>
          <a href="/content" onMouseOver={requestPrefetch} onClick={requestRouteChange}>Nav to /content with dynamic content</a>
        </li>
        <li className={currentRoute === "invalid-route" ? "selected" : ""}>
          <a href="/invalid-route" onClick={requestRouteChange}>This nav is invalid</a>
        </li>
      </ul>
    </>
  );
}
