import type { MouseEvent as ReactMouseEvent } from "react";
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
export default function NavLinks({ routeRoot, initialRoute, onRouteRequest, onPrefetchRequest, }: {
    routeRoot: string;
    initialRoute: string;
    onRouteRequest: (url: string) => void;
    onPrefetchRequest: (url: string) => void;
}): import("react").JSX.Element;
