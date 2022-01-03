// const name = "Arjun";

// console.log(name);

// const fs = require("fs");
// fs.writeFileSync("read.txt", "welcome to my channel");
// fs.writeFileSync("read.txt", "Arjun Sharma, Welcome to my channel");
// fs.appendFileSync("read.txt", "  Hash Table is a data structure which stores data in an associative manner.");
// const buf_data=fs.readFileSync("read.txt");
// console.log(buf_data);

{/* <Buffer 41 72 6a 75 6e 20 53 68 61 72 6d 61 2c 20 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 20 20 0d 0a 48 61 73 68 20 54 61 62 6c 65 20 ... 63 more bytes> */}
// org_data = buf_data.toString();
// console.log(org_data)
// fs.renameSync("read.txt","readwrite.txt");

//  CRUD : create rename update delete 
//google
// var fs = require('fs');

// fs.readFile('readwrite.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// channal
// const fs = require('fs');
// fs.mkdirSync("Arjun");
// fs.writeFileSync('Arjun/bio.txt',"my name Arjun");
// fs.appendFileSync("Arjun/bio.txt"," Sharma");
// const data=fs.readFileSync("Arjun/bio.txt","utf-8");
// console.log(data);
// fs.renameSync("Arjun/bio.txt","Arjun/myBio.txt");
// fs.unlinkSync("Arjun/myBio.txt");
// fs.rmdirSync("Arjun");

// #7
// const fs = require('fs');

// fs.writeFile('read.txt','In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.',(err)=> {
//     console.log("file is created");
//     console.log(err);
// });
// fs.appendFile("read.txt","/n /n Thus, it becomes a data structure in which insertion and search operations are very fast irrespective of the size of the data. Hash Table uses an array as a storage medium and uses hash technique to generate an index where an element is to be inserted or is to be located from.",(err)=>{
//     console.log("task completed")
// });
// fs.readFile('read.txt','utf-8',(err,data)=>{
//     console.log(data);
// });

// #8

// const fs = require('fs');
// const data = fs.readFileSync("read.txt","utf-8")
// console.log(data);
// console.log("after the data");
// fs.readFile("read.txt","utf-8",(err,data)=>{
//     console.log(data)
// });
// console.log("Before the data")

// CRUD
// const fs = require('fs');
// fs.mkdir('arjun',(err)=>{
//     console.log("create Folder");
// });
// fs.writeFile('arjun/bio.txt','My name is Arjun Sharma',(err)=>{
//     console.log("file created");
// });
// fs.appendFile("arjun/bio.txt","I love you yaro",(err)=>{
//     console.log("file Updated");
// });
// fs.readFile('./arjun/bio.txt',"utf-8",(err,data)=>{
//     console.log(data);
// });
// fs.rename('arjun/Mybio.txt','arjun/bio.txt',(err)=>{console.log(err);});
// fs.unlink('arjun/bio.txt',(err)=>{console.log("files deleted");});
// fs.rmdir('./arjun',(err)=>{console.log("remove folder");});

// #10 os module 
// const os = require('os');
// console.log(os.arch());
// const freememory=os.freemem();
// console.log(`${freememory/1024/1024/1024}`);
// const totalmemory=os.totalmem();
// console.log(`${totalmemory/1024/1024/1024}`);
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());

// #11 path module
// const path = require('path');
// console.log(path.dirname('c:/Users/ARJUN/OneDrive/Desktop/learn node js/arjun/path.js'));
// console.log(path.extname('c:/Users/ARJUN/OneDrive/Desktop/learn node js/arjun/index.js'));
// console.log(path.basename('c:/Users/ARJUN/OneDrive/Desktop/learn node js/arjun/index.js'));
// const myPath = path.parse('c:/Users/ARJUN/OneDrive/Desktop/learn node js/index.js');
// console.log(myPath.name);

// #12 create and export
// const add = require('./oper')
// console.log(add(2,4));
// const oper = require('./oper')
// const {add,sub} = require('./oper')
// console.log(oper);
// console.log(oper.add(5,6));
// console.log(oper.sub(10,3));
// console.log(sub(10,3));
// console.log(add(10,3));

// #13 NPM module
// const chalk = require('chalk');
// console.log(chalk.blue("Hello world!"));

// #15 module wrapper function
// (function (exports, require, module, _filename, _dirname) {
//     const name = "Arjun";
//     console.log(name);
// })();

// #16 web server
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.end('Hello from the other side');
// });
// server.listen(3000,"127.0.0.1",()=>{
//     console.log("listening to the port no 3000")
// });

// #17
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     // console.log(req.url);
//     if(req.url="/"){
//         res.end('Hello from the other side');
//     }else if(req.url="/about"){
//         res.end('Hello from the About Us side');
//     }else{
//         res.writeHead(404, {"Content-type":"text/html" });
//         res.end('404 Error');
//     }
// });
// server.listen(3000,"127.0.0.1",()=>{
//     console.log("listening to the port no 3000");
// });

// #18 json in  node js
// const bio = {
//     name: "Arjun",
//     age: 20,
//     gender: "Male",
// };
// // console.log(bio.gender);
// const jsondata = JSON.stringify(bio);
// // console.log(jsondata);
// const objData = JSON.parse(jsondata);
// console.log(objData)

// #19 create api
//  arjun/index.js
// import chalk from 'chalk';

// const error = chalk.bold.red;
// const warning = chalk.hex('#FFA500'); // Orange color

// console.log(error('Error!'));
// console.log(warning('Warning!'));

// import chalk from 'chalk';

// const log = console.log;

// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// // Use RGB colors in terminal emulators that support it.
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));


// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

// 132970064318821