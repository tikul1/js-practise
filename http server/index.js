const http = require("http");
const hostname = "127.0.1.1";

const port = "80";

const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, hostname, () => { 
    console.log(`server running at http://${hostname}:${port}`);
});


app.close();
