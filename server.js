const os = require("os");
const https = require("https");
const app = require("./proxy-server");

const port = process.env.PORT || 8080;
https.createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
}, app).listen(port, () => {
    console.log(`app listening at http://${os.hostname()}:${port}`);
});
