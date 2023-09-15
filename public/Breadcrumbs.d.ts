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
type letter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";
type nocash = `${letter}${string}`;
export interface BreadcrumbNames {
    $title: string;
    [key: nocash]: BreadcrumbNames;
}
export default function Breadcrumbs({ routeRoot, initialRoute, tokens }: {
    routeRoot: string;
    initialRoute: string;
    tokens: BreadcrumbNames;
}): import("react").JSX.Element;
export {};
