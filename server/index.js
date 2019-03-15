const express = require("express");
const cors = require("cors");

require('dotenv').config({path: "./config/server.env"});

const app = express();

app.use(cors());
require("./web/routing/router")(app);


app.listen(process.env.PORT, () => {
    console.log(`erver started on http://localhost:${process.env.PORT}`);
})