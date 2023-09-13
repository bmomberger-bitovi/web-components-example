import type BaseNavLinks from '../public/NavLinks';
import Script from 'next/script';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "nav-links": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

const NavLinks = function({
  routeRoot,
  initialRoute,
  navLinksRef
}: (Parameters<typeof BaseNavLinks>[0] & { navLinksRef: React.Ref<HTMLElement> })
): ReturnType<typeof BaseNavLinks> {
  return (
    <>
      {global.customElements && customElements.get("nav-links") ? null : <Script src="/nav-links.es.js" type="module"/>}
      <nav-links route-root={routeRoot} initial-route={initialRoute} ref={navLinksRef} />
    </>
  )
}
export default NavLinks;
