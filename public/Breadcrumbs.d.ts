/// <reference types="react" />
export interface RouteChangeEvent extends CustomEvent<{
    url: string;
}> {
}
declare global {
    interface HTMLElementEventMap {
        "routechange": RouteChangeEvent;
    }
}
export default function Breadcrumbs({ routeRoot, initialRoute }: {
    routeRoot: string;
    initialRoute: string;
}): import("react").JSX.Element;
