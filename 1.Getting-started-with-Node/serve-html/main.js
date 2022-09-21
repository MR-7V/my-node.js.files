const port = 3000,
http = require("http")
httpStatus = require("http-status-codes")
fs = require("fs")
// const routeMap = {
//     "/": "views/index.html"
// }
const getViewUrl = (url) => {
    return `views${url}.html`;
}
http.createServer((req,res)=>{
    let viewUrl = getViewUrl(req.url);
    fs.readFile(viewUrl,(error,data)=>{
        if(error){
            res.writeHead(httpStatus.NOT_FOUND);
            res.write("<h1>FILE NOT FOUND</h1>");
        }else{
            res.writeHead(httpStatus.OK,{
                "Content-Type":"text/html"
            });
            res.write(data);
            res.write(req.url);
        }
        res.end();
    });
})
.listen(port);
console.log("the server started");