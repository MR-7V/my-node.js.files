const port = 3000;
http = require("http");
httpStatus = require("http-status-codes");
app = http.createServer((request,response)=>{
  console.log("Recieved incoming request !");
  response.writeHead(httpStatus.OK,{"Content-Type":"text/html"
  });
  let responseMessage = "<h1>Welcome Boss</h1>";
  response.write(responseMessage);
  response.end();
  console.log(`sent a responseMessage: ${responseMessage}`);
});
app.listen(port);
console.log("the server is started");
