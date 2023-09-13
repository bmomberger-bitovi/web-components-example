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
  entry: path.resolve(__dirname, "./webcomponents/bread-crumbs.js"),
  fileName: (format) => `bread-crumbs.${format}.js`,
  name: "bread-crumbs",
};
const navLinksConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/nav-links.js"),
  fileName: (format) => `nav-links.${format}.js`,
  name: "nav-links",
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
        formats: ["es", "umd"],
        ...library,
      },
      "outDir": "./public",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "react",
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
  ]);
};

buildLibraries();