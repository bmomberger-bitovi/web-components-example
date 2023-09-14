/// <reference types="react" />
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
export default function NavLinks({ routeRoot, initialRoute }: {
    routeRoot: string;
    initialRoute: string;
}): import("react").JSX.Element;
