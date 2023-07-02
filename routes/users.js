const express = require('express');
const { createUser, getUsers } = require("../controllers/users") 

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
 



module.exports = userRouter;