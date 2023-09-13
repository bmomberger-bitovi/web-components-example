import { useEffect, useState } from "react";

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

export interface RouteRequestEvent extends CustomEvent {
  data?: {
    href: string;
  };
  originalEvent?: MouseEvent;
}

export default function NavLinks({
  routeRoot = "/",
  initialRoute
}: {
  routeRoot: string;
  initialRoute: string;
}) {
  const [currentRoute, setCurrentRoute] = useState(initialRoute);

  useEffect(() => {
    const handler = (ev) => {
      if (ev.data.url.startsWith(routeRoot)) {
         setCurrentRoute(ev.data.url.replace(routeRoot, ""));
      } else {
        setCurrentRoute("");
      }
    };
    document.addEventListener("routechange", handler);
    
    return () => {
      document.removeEventListener("routechange", handler);
    }

  }, [])

  const requestRouteChange = (ev) => {
    const href = ev.target.getAttribute("href");
    ev.preventDefault();

    const wrapped: RouteRequestEvent = new CustomEvent("routerequest", {
      bubbles: true
    });
    wrapped.data = {
      href
    }
    wrapped.originalEvent = ev;

    ev.target.dispatchEvent(wrapped);
  }

  const requestPrefetch = (ev) => {
    const href = ev.target.getAttribute("href");
    // ev.preventDefault();

    const wrapped: RouteRequestEvent = new CustomEvent("prefetchrequest", {
      bubbles: true
    });
    wrapped.data = {
      href
    }
    wrapped.originalEvent = ev;

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
        <li className={currentRoute === "content" ? "selected" : ""}>
          <a href="/content" onMouseOver={requestPrefetch} onClick={requestRouteChange}>Nav to /content with dynamic content</a>
        </li>
        <li className={currentRoute === "invalid-route" ? "selected" : ""}>
          <a href="/invalid-route" onClick={requestRouteChange}>This nav is invalid</a>
        </li>
      </ul>
    </>
  );
}
