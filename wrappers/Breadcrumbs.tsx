import type BaseBreadcrumbs from '../public/Breadcrumbs';
import Script from 'next/script';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "bread-crumbs": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

const Breadcrumbs: typeof BaseBreadcrumbs = function({
  routeRoot,
  initialRoute
}) {
  return (
    <>
      {global.customElements && customElements.get("bread-crumbs") ? null : <Script src="/bread-crumbs.es.js" type="module"/>}
      <bread-crumbs route-root={routeRoot} initial-route={initialRoute} />
    </>
  )
}
export default Breadcrumbs;