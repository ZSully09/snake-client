const net = require("net");
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "192.168.88.149",
    port: 50541
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
