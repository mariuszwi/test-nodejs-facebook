const express = require("express");
const cors = require("cors");

require('dotenv').config({path: "./config/server.env"});

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    console.log("URL: " + req.url);

    const postList = [
        {title: "post 1",
        text: "text 1"
        },
        {title: "post 2",
        text: "text 2"
        },
        {title: "post 3",
        text: "text 3"
        }
    ];

    res.json(postList)
});

app.listen(process.env.PORT, () => {
    console.log(`erver started on http://localhost:${process.env.PORT}`);
})