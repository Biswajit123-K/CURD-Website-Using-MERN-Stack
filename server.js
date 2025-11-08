const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const studentrouter = require('./routes/studentRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/icis")
.then(()=>{
    console.log("Connected");
})
.catch((err)=>console.log("Error",err));


app.use('/student',studentrouter);
app.listen(3000,()=>{
    console.log("Server is now start");
});