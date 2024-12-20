//URL: Uniform Resource Locator
const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const myURL = url.parse(req.url, true);
    fs.appendFile('log.txt', `${Date.now()}: ${req.method} ${req.url}: new Req received\n`, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            switch (myURL.pathname) {
                case '/':
                    if(req.method === "GET")   res.end("HomePage");
                    break;
                case '/about':
                    const username = myURL.query.myname;
                    res.end(`HI, ${username}`);
                    break;
                case '/contact':
                    res.end("9111111111");
                    break;
                case '/search': 
                    const search = myUrl.quary.search_query;
                    res.end("Here are your results for" +search);    
                case 'signup':
                    if(req.method === "GET") res.end("This is a signup Form");  
                    else if()  
                default:
                    res.end("404 Not Found");
            }
        }
    });
});


myServer.listen(3000, () => console.log("Server is running on port 3000"));
