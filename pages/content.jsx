import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from "react";
import styles from '../styles/Home.module.css';
import Breadcrumbs from '../components/Breadcrumbs';
import NavLinks from '../components/NavLinks';

const tokens = { $title: "Content" }

const DynamicPageContent = dynamic(
  () => import("../components/PageContent")
);

export default function Content() {

  const [lastError, setLastError] = useState(null);
  const router = useRouter();
  const navLinksRef = useRef();

  useEffect(() => {
    const handler = (ev) => {
      const { detail: { href } } = ev;
      if (!href.includes("invalid")) {
         router.push(href);
         setLastError(null);
      } else {
        setLastError(`Invalid route detected: ${href}`);
      }
    };

    if(navLinksRef.current) {
      const currentRef = navLinksRef.current;
      currentRef.addEventListener("routerequest", handler);
      return () => {
        currentRef.removeEventListener("routerequest", handler);
      }
    }
  }, [navLinksRef.current]);

  useEffect(() => {
      const ev = new CustomEvent("routechange", {
        detail: {
          url: "/content"
        }
      });;

      document.dispatchEvent(ev);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is the internal app for developing the breadcrumb and nav-links components</h1>

        <p>Bread Crumbs</p>
        <Breadcrumbs routeRoot="/content" initialRoute="/content" tokens={tokens} />
        <hr/>

        <div ref={navLinksRef}>
        <p>Nav Links</p>
        <NavLinks routeRoot="/content" initialRoute="/content"/>
        </div>

        <p>Page Content</p>
        <DynamicPageContent />
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