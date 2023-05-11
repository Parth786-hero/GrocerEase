const express = require("express");
const route = express.Router();
const Product = require("../models/productSchema");
const Category = require("../models/categorySchema");
const Customer = require("../models/customerSchema");
const Admin = require("../models/adminSchema.js");
route.get("/" , (req,res)=>{
    res.send("<h1>landing page of server side .....</h1>");
});
route.post("/customer" , async (req,res)=>{
    try{
        const member = new Customer(req.body);
        await member.save();
        res.status(201).send("User added successfully .....");
    }catch(e){
        res.status(400).send(e);
    }

})
route.post("/api/product" , async (req,res)=>{
    try{
        const item = new Product(req.body);
        const itemSaved = await item.save();
        res.status(201).send(itemSaved);
    }catch(e){
        res.status(400).send(e);
        console.log(e);
    }

})
route.get("/api/product" , async (req,res)=>{
    try{
        const ans = await Product.find({});
        res.status(200).send(ans);
    }catch(e){
        res.status(400).send(e);
        console.log(e);
    }

})
route.post("/api/category" ,async (req,res)=>{
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


route.post("/api/admin" , async (req,res)=>{
    try{
        const {number} = req.body;
        const userPass = req.body.password;
        const member = await Admin.findOne({number});
        if(member){
            const {password} = member;
            
            if(password === userPass){
                res.status(200).json("Fully loaded ....");
            }else{
                throw new Error("Invalid user hai yeh ....");
            }
        }else{
            throw new Error("Invalid user hai yeh ....");
        }
    }catch(e){
        res.status(400).send(e);
        console.log(e);
    }
})
// This will only be enable after my permission 

// route.post("/api/admin" , async (req, res)=>{
//     try{
//         const member = new Admin(req.body);
//         const memberSaved = await member.save();
//         res.status(201).json(memberSaved);
//     }catch(e){
//         res.status(400).send(e);
//         console.log(e);
//     }
// })
module.exports = route;