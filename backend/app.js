const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose')
const User = require('./models/user');
const ToDos = require('./models/todos');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  try {
    res.status(200).json({ test: "Sucess" });
  } catch (error) {
    console.log(`Error ${error}`)
  }
});

app.post('/user', (req, res) => {
  try {
    res.status(200).json({ path: "user" });
    console.log(req.body);
  } catch (error) {
    console.log(`Error ${error}`)
  }
})

app.get('/checkbackend', (req, res) => {
  try {
    res.status(200).json({ Backend: "Connected" });
  } catch (error) {
    console.log(`Error ${error}`);
  }
});


module.exports = app;