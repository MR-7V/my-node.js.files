const routeResponseMap = {
  "/":"<h1>home page</h1>",
  "/info":"<h1>This is info page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn More About Us.</h1>",
  "/hello": "<h1>Say hello by emailing us here</h1>",
  "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};

const port = 3000;
http = require("http");
httpStatus = require("http-status-codes");
app = http.createServer((request,response)=>{
  console.log("Recieved incoming request !");
  response.writeHead(httpStatus.OK,{"Content-Type":"text/html"});
  if(routeResponseMap[request.url]){
    setTimeout(() => response.end(routeResponseMap[request.url]), 2000);
  }else{
    response.end("<h1>This is default page</h1>");
  }
});
app.listen(port);
console.log("the server is started on port number 3000");
