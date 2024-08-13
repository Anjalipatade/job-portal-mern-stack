const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser= require("body-parser");
require("dotenv").config();
var cors = require("cors");




//database connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log("DB connected"))
    .catch((err)=>console.log(err));


//port
const port = process.env.port || 9000

app.listen(port,() => {
    console.log('server running on port ${9000}');
});