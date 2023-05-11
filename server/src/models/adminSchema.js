const mongoose = require("mongoose");
const validator = require("validator");
const adminSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    number : {
        type : Number,
        validate(number){
            if((number+"").length !== 10){
                throw new Error("Invalid number received bro ....");
            }
        },
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(email){
            if(!validator.isEmail(email)){
                throw new Error("Invalid email received bro ...")
            }
        }
    },
    address : {
        type : String , 
        minlength : 3
    },
    password : {
        type : String,
        required : true,
        minlength : 3
    }
});
const Admin= new mongoose.model("Admin" , adminSchema);
module.exports = Admin;