import r2wc from "@r2wc/react-to-web-component"
import Breadcrumbs from "../components/Breadcrumbs";

/**
 * @element bread-crumbs
 * This web component encapsulates the Breadcrumbs React component
 * @type {CustomElement}
 *
 * @attribute route-root    the root of routing for this component
 * @attribute initial-route the full application route at the time of initialization
 * @attribute tokens        a JSON object of names for each possible path of the routing tree,
 *                          taking the form of a $title property for the string title of
 *                          the current path element, and any property starting with a 
 *                          lowercase letter representing a possible value for the next
 *                          path element.  A JSON string like
 *                          '{ "$title": "Home", "foo": { "$title": "Roo" }, "bar": { "$title": "Bar"}}'
 *                          will display "Home" for the "/" route, and "Home / Roo" for
 *                          the "/foo" route.
 * @listens RouteChangeEvent
 */
const WebBreadcrumbs = r2wc(Breadcrumbs, {
  props: {
    routeRoot: "string",
    initialRoute: "string",
    tokens: "json"
  },
});

customElements.define("bread-crumbs", WebBreadcrumbs);