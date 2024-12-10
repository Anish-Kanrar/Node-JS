// const { log } = require("console");
const http = require("http");
const fs = require("fs");
/*
const myServer = http.createServer((req, res) => {
    console.log("New Req Rec.");
    res.end("Hello From Server");

})
myServer.listen(8000, () => console.log("Server Started!"))
*/
const myServer = http.createServer((req, res) => {
    // console.log(req);

    // console.log(req.headers);
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            switch (req.url) {
                case '/':
                    res.end("HomePage")
                    break;
                case '/about':
                    res.end("I am a Coder")
                    break;
                case '/contact':
                    res.end("9111111111")
                    break;
                default:
                    res.end("404 Not Found")
            }
            res.end("Hello From Server Again and Again");
        }
    });
});

myServer.listen(9000, () => console.log("Server Started!"));
