const os = require("os");
const app = require("./proxy-server");

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`app listening at http://${os.hostname()}:${port}`);
});
