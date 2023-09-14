import r2wc from "@r2wc/react-to-web-component"
import PageContent from "../components/PageContent";

const WebPageContent = r2wc(PageContent, {
  props: {},
});

customElements.define("page-content", WebPageContent);