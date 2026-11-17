import http from 'http';
import fs from 'fs';
const home = fs.readFileSync('index.html', 'utf-8'  );
const data = fs.readFileSync('contact.html', 'utf-8'  );
const about = fs.readFileSync('about.html', 'utf-8'  );
const service = fs.readFileSync('service.html', 'utf-8'  );
const server = http.createServer((req, res) => {

    console.log("hello world")
    console.log(req.url)
    res.end("Hello from server")
    if (req.url === "/") {
        res.end(home);
    } else if (req.url === "/about") {
        res.end("about page");
    } 
    else if(req.url === "/contact") {
        res.end("contact page");
    }   
    else if (req.url === "/service") {
        res.end("service page");
    }

});

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:3000/");
});
