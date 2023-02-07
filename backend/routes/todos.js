const express = require('express');
const router = express.Router();

//User schema
const ToDos = require("../models/todos");

// define the all ToDos route
router.get('/', async (req, res) => {
    try {
        const data = await ToDos.find({});
        res.json({
            status: "sucess",
            data
        });
        res.end();
    }
    catch (error) {
        res.json({
            status: "failed",
            error
        });
    }
})

// Add a ToDo
router.post('/add', (req, res) => {
    console.log(req.body);
    console.log("test");
    res.end();
})


module.exports = router;