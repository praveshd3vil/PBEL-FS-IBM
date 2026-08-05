const { userModel } = require("../model/user.model");

const registration = async(req, res) => {

    const userData = req.body;
    try {
        const user = await userModel(userData);
        user.save();
        res.send("user registration succesfull")
    } catch (error) {
        console.log(error);
}
}