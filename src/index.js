'use strict';

const { readFileSync } = require('fs');
var http = require('http');//create a server object:
var path = require('path');
http.createServer(function (req, res) {
 const url = req.url;
 if(url === "/" ){
    const content = readFileSync(path.resolve(__dirname,"index.html") );
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(content); //write a response
 }
 if(url === "/js/app.js"){
    const content = readFileSync(path.resolve(__dirname,"js/app.js") );
    res.writeHead(200,{"Content-Type" : "text/javascript"});
    res.write(content); //write a response
 }
 if(url === "/js/route.js"){
    const content = readFileSync(path.resolve(__dirname,"js/route.js") );
    res.writeHead(200,{"Content-Type" : "text/javascript"});
    res.write(content); //write a response
 }
 if(url === "/js/router.js"){
    const content = readFileSync(path.resolve(__dirname,"js/router.js") );
    res.writeHead(200,{"Content-Type" : "text/javascript"});
    res.write(content); //write a response
 }
 if(url === "/js/index.js"){
    const content = readFileSync(path.resolve(__dirname,"js/index.js") );
    res.writeHead(200,{"Content-Type" : "text/javascript"});
    res.write(content); //write a response
 }
 if(url === "/views/about.html"){
    const content = readFileSync(path.resolve(__dirname,"views/about.html") );
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(content); //write a response
 }
 if(url === "/views/home.html"){
    const content = readFileSync(path.resolve(__dirname,"views/home.html") );
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(content); //write a response
 }
 if(url === "/views/products.html"){
    const content = readFileSync(path.resolve(__dirname,"views/products.html") );
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(content); //write a response
 }
  
  res.end(); //end the response
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});