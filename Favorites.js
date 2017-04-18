var url = require("url");

var fs = require('fs');

var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);


server.listen(PORT, function() {
  
  console.log("Server listening on: http://localhost:%s", PORT);
});


function handleRequest(req, res) {

  
  var urlParts = url.parse(req.url);
 
  switch (urlParts.pathname) {
    case "/":
      displayRoot(urlParts.pathname, req, res);
      break;
    case "/home":
      displayHome(urlParts.pathname, req, res);
      break;
    case "/favoritefood":
      displayFood(urlParts.pathname, req, res);
      break;
    case "/favoritemovies":
      displayMovies(urlParts.pathname, req, res);
      break;
    case "/favoritecss":
      displayCSS(urlParts.pathname, req, res);
      break;
    //default:
     // display404(urlParts.pathname, req, res);
  }     
}


function displayRoot(url, req, res) {
  var myHTML = "<html>";
  myHTML += "<body><h1>Home Page</h1>";
  myHTML += "</body></html>";
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
}

function displayHome(url, req, res){
    fs.readFile(__dirname + '/Home.html', function(err, data) {
      res.writeHead(200, {"content-Type": "text/html"});
      res.end(data);
    })
}
function displayFood(url, req, res){
    fs.readFile(__dirname + '/Food.html', function(err, data) {
      res.writeHead(200, {"content-Type": "text/html"});
      res.end(data);
    })
}
function displayMovies(url, req, res){
    fs.readFile(__dirname + '/Movies.html', function(err, data) {
      res.writeHead(200, {"content-Type": "text/html"});
      res.end(data);
    })
}
function displayCSS(url, req, res){
    fs.readFile(__dirname + '/CSS.html', function(err, data) {
      res.writeHead(200, {"content-Type": "text/html"});
      res.end(data);
    })
}