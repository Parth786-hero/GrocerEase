const mongoose = require("mongoose");
const database = `mongodb+srv://kapoorparth096:${process.env.DATABASE_PASSWORD}@cluster0.b8cezvv.mongodb.net/${process.env.DATABASE_HOST}?retryWrites=true&w=majority`;
mongoose.connect(database)
    .then(()=>{
        console.log("GrocerEase database is connected successfully .....");
    })
    .catch((e)=>{
        console.log(e);
    })