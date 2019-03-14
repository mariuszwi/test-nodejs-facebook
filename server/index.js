const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    console.log("URL: " + req.url);

    const postList = [
        {body: "post 1"},
        {body: "post 2"},
        {body: "post 3"},
        {body: "post 4"}
    ];

    res.json(postList)
});

app.listen(3000, () => {
    console.log("server works!");
})