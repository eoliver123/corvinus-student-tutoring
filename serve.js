const http = require("http");
const fs = require("fs");
const path = require("path");

const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript" };

http.createServer((req, res) => {
  let filePath = req.url === "/" ? "/index.html" : req.url;
  filePath = path.join(__dirname, decodeURIComponent(filePath.split("?")[0]));
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": types[ext] || "text/plain" });
    res.end(data);
  });
}).listen(8080, () => console.log("listening on 8080"));
