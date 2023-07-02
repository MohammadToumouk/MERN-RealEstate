const User = require("../models/user")
const createUser =  async(req,res)=>{
    try {
        const {body} = req
        const user = await User.create(body)
        res.status(201).json(user)        
    } catch (error) {
        console.log(error)
    }

}

const getUsers = async(req,res) => {
    try {  
       const user = await User.find({});
       res.status(200).json(user)    
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createUser,
    getUsers
}