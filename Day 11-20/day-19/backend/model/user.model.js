const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    phnumber:{
        type: Number,
        require: true
    }

})

const userModel = mongoose.model("user", userSchema);


module.exports={
    userModel
}