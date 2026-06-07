const mongoose = require("mongoose");


async function connectDB(){

    await mongoose.connect("mongodb+srv://op:zG2YP6oTXwaeCEKw@firstdemo.xe4qob2.mongodb.net/op")
    console.log("DB connected sucessfully")

}

module.exports = connectDB
