const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwtAuth = require("../Middleware/Auth");

//User schema
const ToDos = require("../models/todos");

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

// define the all ToDos route
router.get('/:usr', jwtAuth, async (req, res) => {
    try {
        const data = await ToDos.find({ usr: req.params.usr });
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
router.post('/add', jwtAuth, async (req, res) => {
    try {
        const data = await ToDos.create({ title: req.body.title, note: req.body.note, usr: req.body.usr })
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

// Edit a ToDo
router.put('/edit/:id', jwtAuth, async (req, res) => {
    try {
        const data = await ToDos.updateOne({ _id: req.params.id }, { "title": req.body.title, "note": req.body.note })
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

// Delete a ToDo
router.delete('/del/:id', jwtAuth, async (req, res) => {
    try {
        const data = await ToDos.deleteOne({ _id: req.params.id })
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

module.exports = router;