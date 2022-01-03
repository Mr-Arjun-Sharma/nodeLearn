// const http = require("http");

// const server = http.createServer((req, res)=>{
//     if(req.url = "/"){
//         res.end("Hello Arjun Now you in Home Page");
//     } else if(req.url = "/about"){
//         res.end("Hello Arjun Now you in About Us Page");
//     }else if(req.url = "/contact"){
//         res.end("Hello Arjun Now you in Contect Us Page");
//     }else{
//         res.writeHead(404, { "Content-type": "text/html"});
//         res.end("<h1>404 error pages. page doesn't exits. </h1>");
//     }
// });

// server.listen(8000, "127.0.0.1", ()=>{
//     console.log("listening to the port no 8000");
// });


// #20
// const EventEmitter = require('events');
// const event = require('events');
// const EventEmitter = new event.EventEmitter();
// const event = new EventEmitter();
// event.on("sayMyName",()=>{
//     console.log("Your Name is Arjun Sharma");
// });
// event.on("sayMyName",()=>{
//     console.log("Your Name is Sharma");
// });
// event.on("sayMyName",()=>{
//     console.log("Your Name is Arjun Sharma");
// });
// event.on("checkPage", (sc,msg) => {
//     console.log(`status code is ${sc} and the page is ${msg}`);
// });
// // event.emit("sayMyName");
// event.emit("checkPage",200,"ok");

// #21 streaming
// const fs = require('fs');
// const http = require('http');
// const server = http.createServer();
// server.on('request',(req,res)=>{
//     // var fs = require('fs');
//     // fs.readFile('aoo.txt', (err, data)=>{
//     //     if(err) return console.error(err);
//     //     res.end(data.toString());
//     // });
//     const rstream = fs.createReadStream('aoo.txt');
//     rstream.on('data',(chunkdata)=>{
//         res.write(chunkdata);
//     });
//     rstream.on('end',()=>{
//         res.end();
//     });
// });

// server.listen(8000, "127.0.0.1");

// #22 
const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
    const rstream = fs.createReadStream('aoo.txt');
    rstream.pipe(res);
});
server.listen(3000, "127.0.0.1");