const fetch = require("node-fetch");
const express = require("express");
const router = express.Router();

router.get('/posts', (req, res) => {
    fetch(process.env.POST_SERVICE_URL)
        .then((response) => {
            return response.json();
        })
        .then((posts) => {
            res.json(posts);
        });
});

module.exports = function(app) {
	app.use(router)
}