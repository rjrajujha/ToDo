const express = require('express');
const app = express();

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  next();
});

app.post('/init', (req, res) => {
  res.json({
    status: "Connected",
    message: "Backend Connected"
  })
  res.end();
})

app.use('/login', require("./routes/login"));
app.use('/signup', require("./routes/signup"));
app.use('/todos', require("./routes/todos"));

app.get('/*', (req, res) => {
  res.writeHead(301, { Location: "https://github.com/rjrajujha" });
  res.end();
})

module.exports = app;