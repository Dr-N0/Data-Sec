const tunnel = require("tunnel-ssh");

// let config = {
//   username: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   host: "starbug.cs.rit.edu",
//   port: 22,
//   dstHost: "starbug.cs.rit.edu",
//   dstPort: 5432,
//   localHost: "127.0.0.1",
//   localPort: 5432,
// };

// exports.runInSSHTunnel = function (dbOperaion) {
//   return new Promise((resolve, reject) => {
//     const tnl = tunnel(config, async (err, server) => {
//       if (err) {
//         throw err;
//       }

//       results = await dbOperaion();
//       resolve(results);

//       tnl.close();
//     });
//   });
// };

let config_main = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: "starbug.cs.rit.edu",
  port: 22,
  dstHost: "starbug.cs.rit.edu",
  dstPort: 5432,
  localHost: "127.0.0.1",
  localPort: 5555,
  keepAlive: true,
};
exports.startSSHTunnel = function () {
  return new Promise((resolve, reject) => {
    const tnl = tunnel(config_main, async (err, server) => {
      if (err) {
        throw err;
      }
    });
  });
};
