require("dotenv").config();
require('./database/conn');
const express = require("express");
const app = express();
const route = require("./router/route");
// const Product = require("./models/productSchema");
app.use(express.json());
// app.use(express.urlencoded({extended : false}));
app.use(route);
const port = process.env.PORT;
app.listen(port , ()=>{
    console.log("server is onn at port no. 8080");
});
