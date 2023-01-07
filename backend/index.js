const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI;


const db = mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

db.then(() => {
    console.log("Connected to DataBase")
}).catch((e) => {
    console.log(`Error ${e}`)
});



app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
})