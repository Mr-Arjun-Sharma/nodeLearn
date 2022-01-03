const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.write("<h1>Welcome my home page</h1>");
    res.end("<h1>Welcome my home page</h1>");
});

app.get("/about",(req,res) => {
    res.status(200).end("<h1>Welcome my about page</h1>");
});
app.get('/contact',(req,res) => {
    res.status(200).end("<h1>Welcome my contact page</h1>");
});
// app.get('/temp',(req,res) => {
//     res.end(
//         [
//             {
//         id: 1,
//         name: "Arjun",
//     }
// ]
//     );
// });
app.get('/temp',(req,res) => {
    res.json(
        [
            {
        id: 1,
        name: "Arjun",
    }
]
    );
});

app.listen(port, ()=>{
    console.log(`listening to the port no ${port}`);
});