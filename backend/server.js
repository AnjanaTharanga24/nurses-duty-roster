const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/connectDB')

const app = express();

connectDB();
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})