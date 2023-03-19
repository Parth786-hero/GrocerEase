const mongoose = require("mongoose");
// const mongooseValidator = require("mongoose-unique-validator");
const productSchema = new mongoose.Schema({
    name : {
        type : String ,
        trim : true,
        required : true,
        minlength : 3
    },
    imgUrl : {
        type : String,
        required : true
    },
    weightNum : {
        type : Number,
        required : true,
        validate(val){
            if(val <= 0){
                throw new Error("Invalid weight value reveived .....");
            }
        }
    },
    weightUnit : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
        validate(val){
            if(val <= 0){
                throw new Error("Invalid price received .....");
            }
        }
    },
    category : {
        type : String,
        required : true,
        minlength : 3
    }
});
// productSchema.plugin(mongooseValidator);
const Product = new mongoose.model("Product" , productSchema);
module.exports = Product;