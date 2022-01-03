const path = require('path')
const express = require('express');
const app = express();

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, '../public');
app.set('view engine','hbs')

// app.use(express.static(staticPath));


app.get("",(req,res) => {
    res.render('index',{name:"Arjun"});
    // res.end("<h1>Welcome my home page</h1>");
});
// app.get("/",(req,res) => {
//     res.write("<h1>Welcome my home page</h1>");
//     res.end("<h1>Welcome my home page</h1>");
// });

app.get("/about",(req,res) => {
    res.status(200).end("<h1>Welcome my about page</h1>");
});
app.get('/contact',(req,res) => {
    res.status(200).end("<h1>Welcome my contact page</h1>");
});

app.listen(5000,()=>{
    console.log("listing the port at 5000");
});