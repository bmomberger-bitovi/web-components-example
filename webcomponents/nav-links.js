import r2wc from "@r2wc/react-to-web-component"
import NavLinks from "../components/NavLinks";

/**
 * @element nav-links
 * This web component encapsulates the NavLinks React component
 * @type {CustomElement}
 *
 * @attribute route-root         the root of routing for this component
 * @attribute initial-route      the full application route at the time of initialization
 * @attribute on-route-request   window property containing alternative listener for routerequest events
 * @attribute on-prefetch-request window property containing alternative listener for prefetchrequest events
 * 
 * @fires RouteRequestEvent
 * @fires PrefetchRequestEvent
 * @listens RouteChangeEvent
 */
const WebNavLinks = r2wc(NavLinks, {
  props: {
    routeRoot: "string",
    initialRoute: "string",
    onRouteRequest: "function",
    onPrefetchRequest: "function",
  },
});

customElements.define("nav-links", WebNavLinks);