const { userModel } = require("../model/user.model");

const registration = async(req, res) => {

    const userData = req.body;

    const {name, email, password, phnumber} =  res.body;

    if(name == "" || email == "" || password == "" || phnumber==""){
        return res.send({"message":"All fields are required"});
    }

    try {
        const user = await userModel(userData);
        user.save();
        res.send("user registration succesfull")
    } catch (error) {
        console.log(error);
}
}

module.exports = {
    registration
}