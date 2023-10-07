import { useEffect, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import type { RouteChangeEvent } from "./Breadcrumbs";

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

/**
 * Event reportiing that the user may soon generate a navigation event.
 *
 * @event PrefetchRequestEvent
 * @property {string} detail.href - The proposed route path to prefetch resources for
 * @property {ReactMouseEvent} the event that generated this event
 */

export interface PrefetchRequestEvent extends CustomEvent<{
  href: string;
}> {
  originalEvent: ReactMouseEvent;
}

/**
 * Event reportiing that the user has generated a navigation event.
 *
 * @event RouteRequestEvent
 * @property {String} detail.href - The proposed route path to navigate to
 * @property {ReactMouseEvent} the event that generated this event 
 */

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

/**
 * @function NavLinks
 * The NavLinks React component implements a set of top-level navigation links which
 *  highlight based on the current route and generate route change request events
 *  on user interaction.
 * @parent components
 * @param  {String} props.routeRoot         the root of routing for this component
 * @param  {String} props.initialRoute      the full application route at the time of initialization
 * @param  {Function} props.onRouteRequest    alternative listener for routerequest events
 * @param  {Function} props.onPrefetchRequest alternative listener for prefetchrequest events
 * @returns import("react").Element 
 */
export default function NavLinks({
  routeRoot = "/",
  initialRoute,
  onRouteRequest,
  onPrefetchRequest,
}: {
  routeRoot: string;
  initialRoute: string;
  onRouteRequest: (url: string) => void;
  onPrefetchRequest: (url: string) => void;
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

    if (typeof onRouteRequest === "function") {
      onRouteRequest(href);
    }
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

    if (typeof onPrefetchRequest === "function") {
      onPrefetchRequest(href);
    }
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
