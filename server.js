const os = require("os");
const fs = require("fs");
const https = require("https");
const appHttps = require("./proxy-server");
const appHttp = require("./proxy-server");

const portHttps = process.env.PORT || 2929;
const portHttp = process.env.PORT || 1919;

https.createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
}, appHttps).listen(portHttps, () => {
    console.log(`app listening at https://${os.hostname()}:${portHttps}`);
});

appHttp.listen(portHttp, () => {
    console.log(`app listening at http://${os.hostname()}:${portHttp}`);
});
