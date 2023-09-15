import r2wc from "@r2wc/react-to-web-component"
import Breadcrumbs from "../components/Breadcrumbs";

const WebBreadcrumbs = r2wc(Breadcrumbs, {
  props: {
    routeRoot: "string",
    initialRoute: "string",
    tokens: "json"
  },
});

customElements.define("bread-crumbs", WebBreadcrumbs);