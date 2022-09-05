const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const fs = require("fs");

const app = express();
app.use(express.json());

fs.readFile("./proxy-config.json", "utf8", (err, data) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }

    let proxyConfig = JSON.parse(data);
    proxyConfig.forEach((proxy) => {
        app.use(
            proxy.pathFrontEnd,
            createProxyMiddleware({
                pathRewrite: { [proxy.pathFrontEnd]: proxy.pathBackendEnd },
                target: proxy.target,
                changeOrigin: true,
                secure: false
            })
        );
    });
});

module.exports = app;
