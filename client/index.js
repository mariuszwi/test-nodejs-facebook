const express = require("express");

require('dotenv').config({path: "./config/client.env"});

const app = express();

app.use("/", express.static("./dist"));

app.get('/',(reg, res)=> {
    console.log(req.url);
    res(send(JSON.stringify({status:"ok"}))
)});

app.get('/posts',(reg, res)=> {
    fetch("http://server-service").then((posts)=>{
        res.json(posts);
    });
});

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`Server works on htt://localhost:${process.env.PORT}`);
});
