import typescript from "typescript";
import { writeFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { glob } from "glob";
import path from "node:path";
import { fileURLToPath } from 'url';
import tsconfig from "./tsconfig.json" with {type: "json"};

const {
  createProgram,
  ScriptKind,
  ScriptTarget,
  ModuleResolutionKind,
  JsxEmit,
  ModuleKind
} = typescript;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileEntries = await glob(tsconfig.include, { nodir: true, ignore: tsconfig.exclude });

/** @type {import("typescript").CompilerOptions} */
const baseCompilerOptions = {
  ...tsconfig.compilerOptions,
  noEmit: false,
  jsx: JsxEmit.ReactJSX,
  target: ScriptTarget.ESNext,
  lib: tsconfig.compilerOptions.lib.map(lib => `lib.${lib}.d.ts`),
  moduleResolution: ModuleResolutionKind.Node16
};
/** @type {import("typescript").CompilerOptions} */
const cjsCompilerOptions = {
  ...baseCompilerOptions,
  declaration: true,  // just need to build declarations once
  module: ModuleKind.CommonJS,
};
/** @type {import("typescript").CompilerOptions} */
const esCompilerOptions = {
  ...baseCompilerOptions,
  declaration: false,
  module: ModuleKind.ES2022,
};

const program = createProgram({ rootNames: fileEntries, options: cjsCompilerOptions });
const esProgram = createProgram({ rootNames: fileEntries, options: esCompilerOptions });
fileEntries.forEach(fileEntry => {
  const sourceFile = program.getSourceFile(fileEntry);

  const result = program.emit(program.getSourceFile(fileEntry), (
    fileName,
    contents,
  ) => {
    console.log("writing", fileName)
    writeFileSync(
      fileName.replace(/\.js$/, ".cjs.js"), // .d.ts files will not match the regex so not changed
      contents,
    );
  });
  result.diagnostics.forEach(diagnostic => console.log(diagnostic.code, diagnostic.messageText))

  const esResult = esProgram.emit(sourceFile, (
    fileName,
    contents
  ) => {
    console.log("writing", fileName)
    writeFileSync(
      fileName.replace(/\.js$/, ".es.js"),
      contents,
    );
  });
  esResult.diagnostics.forEach(diagnostic => console.log(diagnostic.code, diagnostic.messageText))
});
