const express = require("express");
const { registration, userLogin, getAllUsers, forgetPassword, changepasswordForm } = require("../controller/user.controller");
const { authCheck } = require("../middleware/auth");
const userRouter = express.Router();

userRouter.post("/registration", registration);
userRouter.post("/login", userLogin);
userRouter.get("/users", getAllUsers);
userRouter.post("/forget-password", forgetPassword);
userRouter.post("/change-password",authCheck ,changepasswordForm);

module.exports = { 
    userRouter 
};