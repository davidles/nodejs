const express = require('express');
const dotenv = require('dotenv');

// Configuration the .env file
dotenv.config();

// Create Express APP
const app = express();
const port = process.env.PORT || 8000;

// Define the first Route of APP
app.get('/', (req, res) =>{
    res.send("Welcome to APP Express + TS + Swagger + Mongoose")
});

// Execute APP and Listen Requests to PORT
app.listen(port, () =>{
    console.log(`Express Server: Running at http://localhost:${port}`)
})
