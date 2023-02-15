import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my first node page");
  } else if (req.url === "/about") {
    res.end("Welcome to my about node page");
  } else
    res.end(`
   <h1>Oops!</h1>
 <p>We can't seem to find the page you are looking for</p>
 <a href="/">back home</a>
  `);
});

server.listen(5000);
