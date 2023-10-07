import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from "react";
import styles from '../styles/Home.module.css';
import Breadcrumbs from '../components/Breadcrumbs';
import NavLinks, { PrefetchRequestEvent, RouteRequestEvent } from '../components/NavLinks';
// import type { RouteRequestEvent, PrefetchRequestEvent } from '../components/NavLinks';
import type { RouteChangeEvent } from '../components/Breadcrumbs';

const tokens = {
  $title: "Home",
  "foo": {
    $title: "Foo Breadcrumb",
    bar: {
      $title: "Bar Breadcrumb"
    },
  },
  baz: {
    $title: "Baz Breadcrumb"
  }
};

export default function Home() {

  const [lastError, setLastError] = useState<string | null>(null);
  const router = useRouter();
  const navLinksRef = useRef<HTMLElement>();

  useEffect(() => {
    const handler = (ev: RouteRequestEvent) => {
      const { detail: { href }} = ev;
      if (!href.includes("invalid")) {
         router.push(href);
         setLastError(null);
      } else {
        setLastError(`Invalid route detected: ${href}`);
      }
    };
    const pfHandler = (ev: PrefetchRequestEvent) => {
      const { detail: { href }} = ev;
      if (!href.includes("invalid")) {
         router.prefetch(href);
      }
    };

    if(navLinksRef.current) {
      const currentRef = navLinksRef.current;
      currentRef.addEventListener("routerequest", handler);
      currentRef.addEventListener("prefetchrequest", pfHandler);
      return () => {
        currentRef.removeEventListener("routerequest", handler);
        currentRef.removeEventListener("prefetchrequest", pfHandler);
      }
    }

  }, [navLinksRef.current]);

  const routeAsPath = `/${(router.query.path as string[] | undefined)?.join("/") ?? ""}`;

  useEffect(() => {
    const ev: RouteChangeEvent = new CustomEvent("routechange", {
      detail: {
        url: routeAsPath
      }
    });

    document.dispatchEvent(ev);
  }, [routeAsPath]);

  return (
    <div className={styles.container}>
      <Script>{`window.process = window.process || { env: { NODE_ENV: 'production' } }; `}</Script>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is the internal app for developing the breadcrumb and nav-links components</h1>

        <p>Bread Crumbs</p>
        <Breadcrumbs routeRoot="/" initialRoute={routeAsPath} tokens={tokens} />
        <hr/>

        <div ref={navLinksRef}>
        <p>Nav Links</p>
        <NavLinks routeRoot="/" initialRoute={routeAsPath} />
        </div>
      </main>

      <footer>
        <p>Last error:</p>
        {lastError && <p>{lastError}</p>}
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
