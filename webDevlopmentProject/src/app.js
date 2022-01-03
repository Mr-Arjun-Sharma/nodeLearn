const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// public sat path
const staticpath = path.join(__dirname,"../public");
app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.send("Welcome to my Home Page");
});
app.get("/about",(req,res)=>{
    res.send("Welcome to my aboutUS Page");
});
app.get("/weather",(req,res)=>{
    res.send("Welcome to my Whether Page");
});
app.get("*",(req,res)=>{
    res.send("404 error page oops");
});

app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
});