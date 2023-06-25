const http = require('http');

// function sername(req,resp){
//     resp.write("<h1><b>This Server Is My</b></h1>")      //using  function
//     resp.end()
// }
 

// const sername = (req,resp) => {
//     resp.write("<b><h1>Hello World</h1></b>");       //using array fuction
//     resp.end()
// }

http.createServer((req,resp)=>{
    
    resp.write("<h1>This Is My Server</h1>");
    resp.end();
}).listen(7999);