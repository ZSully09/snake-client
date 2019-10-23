const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
// function setupInput() {
//   const stdin = process.stdin;
//   stdin.on("data", handleUserInput);
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// }

// function handleUserInput(key) {
//   if (key === "\u0003") {
//     process.exit();
//   }
// }
// setupInput();
