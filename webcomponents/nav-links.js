import r2wc from "@r2wc/react-to-web-component"
import NavLinks from "../components/NavLinks";

const WebNavLinks = r2wc(NavLinks, {
  props: {
    routeRoot: "string",
    initialRoute: "string",
    onRouteRequest: "function",
    onPrefetchRequest: "function",
  },
});

customElements.define("nav-links", WebNavLinks);