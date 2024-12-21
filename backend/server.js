const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const nurseRoutes = require("./routes/nurseRoutes");

const app = express();

app.use(cors({
    origin: "http://localhost:3001"
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // credentials: true
}));

//middleware
app.use(express.json());
app.use("/api/nurse", nurseRoutes);


connectDB();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
