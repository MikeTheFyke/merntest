const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// mongoDB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { 
        useNewUrlParser: true ,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected :)'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server has started on port " + port));


