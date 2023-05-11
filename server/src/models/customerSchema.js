const mongoose = require("mongoose");
// const mongooseValidator = require("mongoose-unique-validator");
const customerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    } , 
    phone : {
        type : Number,
        required : true,
        unique : true,
        validate(val){
            if((val+"").length !== 10){
                throw new Error("Invalid mobile number ....");
            }
        }
    } , 
    address : {
        type : String,
        required : true,
        minlength : 3
    },
    password : {
        type : String,
        required : true,
        minlength : 3
    },
    cpassword : {
        type : String,
        required : true,
        minlength : 3
    }
});
// customerSchema.plugin(mongooseValidator);
const Customer = new mongoose.model("Customer" , customerSchema);
module.exports = Customer;