import r2wc from "@r2wc/react-to-web-component"
import PageContent from "../components/PageContent";

/**
 * @element page-content
 * This web component encapsulates the PageContent React component
 * @type {CustomElement}
 */
const WebPageContent = r2wc(PageContent, {
  props: {},
});

customElements.define("page-content", WebPageContent);