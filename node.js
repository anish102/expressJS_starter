var http = require("http");

let reqHandler = (req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page!");
  } else if (req.url === "/about") {
    res.end("This is about page!");
  } else {
    ("File not found!");
  }
  console.log(`Response to ${req.url}`);
};

var server = http.createServer(reqHandler);
server.listen(3000);
