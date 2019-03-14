const express = require("express");

const app = express();

app.use("/", express.static("./dist"));

// app.get('/',(reg, res)=> {
//     console.log(req.url);
//     res(send(JSON.stringify({status:"ok"}))
// )});

app.listen(3001, (err) => {
    if (err) throw err;
    console.log("Server was started");
});
