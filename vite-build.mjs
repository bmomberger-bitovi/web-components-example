// scripts/build.js
import path from "path";
import url from "url";
import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from '@rollup/plugin-typescript';
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const breadCrumbsConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./components/Breadcrumbs.tsx"),
  fileName: (format) => `Breadcrumbs.${format}.js`,
  name: "Breadcrumbs",
  formats: ["es", "cjs"],
};
const navLinksConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./components/NavLinks.tsx"),
  fileName: (format) => `NavLinks.${format}.js`,
  name: "NavLinks",
  formats: ["es", "cjs"],
};
const pageContentConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./components/PageContent.jsx"),
  fileName: (format) => `PageContent.${format}.js`,
  name: "PageContent",
  formats: ["es", "cjs"],
};

const breadCrumbsWCConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/bread-crumbs.js"),
  fileName: (format) => `bread-crumbs.${format}.js`,
  name: "bread-crumbs",
  formats: ["umd"],
};
const navLinksWCConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/nav-links.js"),
  fileName: (format) => `nav-links.${format}.js`,
  name: "nav-links",
  formats: ["umd"],
};
const pageContentWCConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/page-content.js"),
  fileName: (format) => `page-content.${format}.js`,
  name: "page-content",
  formats: ["umd"],
};


const getConfiguration = ({ plugins, ...library }) => {
  return defineConfig(() => ({
    plugins: [
      react({
        babel: {
          plugins: [
            "styled-jsx/babel"
          ],
        }
      }),
      typescript(),
      ...plugins
    ],
    build: {
      lib: {
        ...library,
      },
      "outDir": "./public",
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM"
          },
        },
      },
    },
  }));
};

const viteBuild = (configFactory) => {
  const config = configFactory();

  return build(config);
};

const buildLibraries = async () => {
  await Promise.all([
    viteBuild(getConfiguration(breadCrumbsConfig)),
    viteBuild(getConfiguration(navLinksConfig)),
    viteBuild(getConfiguration(pageContentConfig)),
    viteBuild(getConfiguration(breadCrumbsWCConfig)),
    viteBuild(getConfiguration(navLinksWCConfig)),
    viteBuild(getConfiguration(pageContentWCConfig)),
  ]);
};

buildLibraries();