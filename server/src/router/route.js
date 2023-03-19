const express = require("express");
const route = express.Router();
const Product = require("../models/productSchema");
const Category = require("../models/categorySchema");
route.get("/" , (req,res)=>{
    res.send("<h1>landing page of server side .....</h1>");
});
route.post("/product" , async (req,res)=>{
    try{
        const item = new Product(req.body);
        const itemSaved = await item.save();
        res.status(201).send(itemSaved);
    }catch(e){
        res.status(400).send(e);
        console.log(e);
    }

})
route.post("/category" ,async (req,res)=>{
    try{
        const item = new Category(req.body);
        const itemSaved = await item.save();
        res.status(201).send(itemSaved);
    }catch(e){
        res.status(400).send(e);
        console.log(e);
    }
})
route.get("/api/category" , async (req,res)=>{
    try{
        const obj = await Category.find({});
        res.status(200).send(obj);
        
    }catch(e){
        res.status(500).send(e);
    }
})
module.exports = route;