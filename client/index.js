const express = require("express");


require('dotenv').config({path: "./config/client.env"});

const app = express();

app.use("/", express.static("./dist"));
require("./web/routing/router")(app);

// app.get('/posts', (req, res) => {
//     fetch(procss.env.POST_SERVICE_URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((posts) => {
//             res.json(posts);
//         });
// });

// app.get('/posts',(reg, res)=> {
//     fetch("http://server-service").then((posts)=>{
//         res.json(posts);
//     });
// });

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`Server works on htt://localhost:${process.env.PORT}`);
});
