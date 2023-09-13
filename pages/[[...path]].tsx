import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from "react";
import styles from '../styles/Home.module.css';
import Breadcrumbs from '../wrappers/Breadcrumbs';
import NavLinks from '../wrappers/NavLinks';

export default function Home() {

  const [lastError, setLastError] = useState(null);
  const router = useRouter();
  const navLinksRef = useRef();

  useEffect(() => {
    const handler = (ev) => {
      if (!ev.data.href.includes("invalid")) {
         router.push(ev.data.href);
         setLastError(null);
      } else {
        setLastError(`Invalid route detected: ${ev.data.href}`);
      }
    };
    const pfHandler = (ev) => {
      if (!ev.data.href.includes("invalid")) {
         router.prefetch(ev.data.href);
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

  const routeAsPath = router.query.path?.join("/");

  useEffect(() => {
    const ev = new CustomEvent("routechange");

    ev.data = {
      url: "/" + (routeAsPath ?? "")
    };

    document.dispatchEvent(ev);
  }, [routeAsPath ?? ""]);

  return (
    <div className={styles.container}>
      <Script>{`window.process = window.process || { env: { NODE_ENV: 'production' } }; `}</Script>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Bread Crumbs</p>
        <Breadcrumbs routeRoot="/" initialRoute={routeAsPath} />
        <hr/>

        <p>Nav Links</p>
        <NavLinks routeRoot="/" initialRoute={routeAsPath} navLinksRef={navLinksRef} />
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
