const net = require("net");
const { IP, PORT } = require("./constants");
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Connection established!");
  });

  conn.on("connect", () => {
    conn.write("Name: ZS9");
  });

  // conn.on("connect", () => {
  //   conn.write("Move: Up");
  // });

  // conn.on("connect", () => {
  //   conn.write("Move: Down");
  // });

  // conn.on("connect", () => {
  //   conn.write("Move: Left");
  // });

  // conn.on("connect", () => {
  //   conn.write("Move: Right");
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
