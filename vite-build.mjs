import path from "path";
import url from "url";
import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from '@rollup/plugin-typescript';
import globals from "./webcomponents/globals.json" with { type: "json" };
import { writeFile } from "fs/promises";

const liteRollup = {
  external: Object.keys(globals),
  output: {
    globals
  },
}

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const breadCrumbsWCConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/bread-crumbs.js"),
  name: "bread-crumbs",
  formats: ["umd"],
};
const navLinksWCConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/nav-links.js"),
  name: "nav-links",
  formats: ["umd"],
};
const pageContentWCConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/page-content.js"),
  name: "page-content",
  formats: ["umd"],
};

const dependenciesConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/dependencies.js"),
  name: "dependencies",
  formats: ["umd"],
};

const getConfiguration = ({ plugins, ...library }, mode) => {
  return defineConfig(() => ({
    define: {
      'process.env': { NODE_ENV: "production" }
    },
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
      emptyOutDir: false,
      lib: {
        ...library,
        fileName: (format) => `${library.name}.${mode}.${format}.js`
      },
      "outDir": "./public",
      rollupOptions: mode === "lite" ? liteRollup : {},
    },
  }));
};

const createDependencyRollup = () => {
  const imports = Object.entries(globals).map(([modulePath, globalName]) => `import ${globalName} from "${modulePath}";`);
  
  const guard = `const rootObj = typeof window !== "undefined" ? window : global`;

  const assignments = Object.entries(globals).map(([modulePath, globalName]) => `rootObj.${globalName} = ${globalName};`);

  return writeFile(path.resolve(__dirname, "./webcomponents/dependencies.js"), [...imports, guard, ...assignments].join("\n"));
}

const viteBuild = (configFactory) => {
  const config = configFactory();

  return build(config);
};

const buildLibraries = async () => {
  await createDependencyRollup();

  await Promise.all([].concat(
    ...["lite", "full"].map(mode => [
      viteBuild(getConfiguration(breadCrumbsWCConfig, mode)),
      viteBuild(getConfiguration(navLinksWCConfig, mode)),
      viteBuild(getConfiguration(pageContentWCConfig, mode)),
    ]),
    [viteBuild(getConfiguration(dependenciesConfig, "full"))]
  ));
};

buildLibraries();
