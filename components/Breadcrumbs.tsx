import { useEffect, useState } from "react";

export default function Breadcrumbs({
  routeRoot = "/",
  initialRoute
}: {
  routeRoot: string;
  initialRoute: string;
}) {
  const [currentRoute, setCurrentRoute] = useState("/");

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

  return (
    <ul>
      {
        ["Home", ...currentRoute.split("/")].map((el, idx) => (
          <li key={`breadcrumb-${el}-${idx}`}>
            {idx !== 0 && <span> / </span>}
            {el}
          </li>
        ))
      }
    </ul>
  );
}
