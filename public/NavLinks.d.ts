import type { MouseEvent as ReactMouseEvent } from "react";
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
 * @returns import("react").Element
 */
export default function NavLinks({ routeRoot, initialRoute, }: {
    routeRoot: string;
    initialRoute: string;
}): import("react/jsx-runtime").JSX.Element;
