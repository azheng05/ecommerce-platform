const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require ("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://azheng2204:139210389012890482190@cluster0.3e2wdjv.mongodb.net/e-commerce");

// API Creation

app.get("/", (req,res)=>{
    res.send("Express app is running");
});

app.listen(port, (error)=> {
    if (error) {
        console.log("Error: " + error);
    }
});