var express = require("express");
var logger = require("morgan");
var http = require("http");

var app = express();
app.use(logger("short"));

// app.use((req, res, next) => {
//   console.log("In comes a request to:" + req.method + " to " + req.url);
//   next();
// });

// app.use((req, res, next) => {
//   var minute = new Date().getMinutes();
//   if (minute % 2 === 0) {
//     next();
//   } else {
//     res.statusCode = 403;
//     res.end("Not authorized.");
//   }
// });

// app.use((req, res) => {
//   res.end("Secret info: the password is 'nothing'!");
// });
app.use((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Hello world!");
});

http.createServer(app).listen(3000);
