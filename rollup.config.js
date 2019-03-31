// rollup.config.js
import sucrase from "rollup-plugin-sucrase";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "bundle/index.js",
    format: "cjs"
  },
  plugins: [
    resolve({
      extensions: [".js", ".ts"]
    }),
    sucrase({
      exclude: ["node_modules/**", "bundle/**", "pkg/**", "sample/**"],
      transforms: ["typescript"]
    })
  ]
};
