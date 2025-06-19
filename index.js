// index.js
const express = require('express');
const dotenv = require('dotenv');
const quotes = require('./quotes.json');
const cors = require('cors');


dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT ; 

app.get('/', (req, res) => {
    res.send('Welcome to the Express.js Tutorial');
});

app.get('/quotes', (req, res) => {
    res.json(quotes);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
