// const sade = require("node_modules/sade/lib/index.js");
import sade from "sade";
const prog = sade("doctest.js");

const chalk = require("chalk");

let doctests = [
  {
    test: { folder: "sample", file: "sum.test.md" },
    module: { folder: "sample", file: "sum.js" }
  }
];

prog
  .version("0.0.1")
  .option("--global, -g", "An example global flag")
  .option("-c, --config", "Provide path to custom config", "foo.config.js");

prog
  .command("test <src>")
  .describe("Runs all tests in the source directory. Expects a folder.")
  .example("test .")
  .example("test my-project-folder")
  .action(src => {
    console.log("> Testing", chalk.blue(`${src}`));
  });

prog.parse(process.argv);
