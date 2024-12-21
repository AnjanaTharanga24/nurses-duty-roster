const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/connectDB')
const nurseRoutes = require('./routes/nurseRoutes')

const app = express();

//middleware
app.use(express.json())
app.use("/api/nurse",nurseRoutes)

connectDB();
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})