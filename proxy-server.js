require("dotenv").config();
var httpProxy = require("http-proxy");

console.log("Proxy Server Run :", process.env.PORT);
httpProxy
    .createProxyServer({ target: process.env.TARGET, changeOrigin: true })
    .listen(process.env.PORT);
