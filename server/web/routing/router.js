const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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
    res.json(postList);
});

module.exports = (app) => {
    app.use(router);
};