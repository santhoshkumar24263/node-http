
const http=require('http')


const dateTimemodule=require('./myDateModule')


http.createServer((request,response)=>{

 response.writeHead(200,{'content-type':'text/html'})
   response.write('Hello World ')
  response.write(dateTimemodule.CurrentDateTime())
  
  
response.end()
}).listen(8080);

console.log("Server started running at http://localhost:8080/");