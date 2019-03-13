const http = require("http");

const server = http.createServer((req, res) => {
    console.log("URL: " + req.url);

    const postList = [
        {body: "post 1"},
        {body: "post 2"},
        {body: "post 3"}
    ]

    res.end(
        JSON.stringify(postList)
    );
});

server.listen(3000, () => {
    console.log("server works!");
})