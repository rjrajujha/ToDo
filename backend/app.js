const express = require('express');
const app = express();
const User = require('./models/user');
const ToDos = require('./models/todos')

app.get('/', (req, res) => {
    res.status(200).json({ test: "Sucess" });
});

app.post('/user', (req, res) => {
  res.status(200).json({Post: "Sucessful"});
})

module.exports = app;