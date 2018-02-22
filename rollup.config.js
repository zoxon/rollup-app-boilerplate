import path from "path";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import postcss from "rollup-plugin-postcss";
import html from "rollup-plugin-fill-html";
import filesize from "rollup-plugin-filesize";
import image from "rollup-plugin-image";
import browsersync from "rollup-plugin-browsersync";

import pkg from "./package.json";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const isProduction = !process.env.ROLLUP_WATCH;

const srcRoot = path.join(__dirname, "src");
const distRoot = path.join(__dirname, "dist");

const external = Object.keys(pkg.dependencies) || [];

const plugins = [
  postcss({
    extract: true,
    minimize: isProduction,
    sourceMap: isProduction
  }),
  image(),
  babel({
    exclude: "node_modules/**"
  }),
  resolve(),
  commonjs(),
  isProduction && uglify(),
  html({
    template: "src/index.html",
    filename: "index.html"
  }),
  !isProduction && browsersync({ server: distRoot }),
  isProduction && filesize()
];

let config = {
  input: path.join(srcRoot, "index.js"),
  output: {
    file: path.join(distRoot, "bundle.js"),
    format: "iife",
    sourcemap: isProduction,
    name: "App"
  },
  plugins
};

export default config;
