// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

// dbs
//pass: iHJ5bH8N05px6BgS
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>console.log("DB CONNECTED")).catch((err)=>console.log("DB CONNECTION ERROR", err));


// middleware
app.use(morgan('dev'));
app.use(cors({origin:true, credentials:true}));


// routes




// ports
const port = process.env.PORT || 8080;


//listner
const server = app.listen(port, ()=>{
  console.log(`Server is running on ${port}`);
})