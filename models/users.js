const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, Unique: true, Required: true},
    name: {type: String, Required: true},
    phoneNumber: {type: String, Unique: true, Required:true} 
});

module.exports('User', userSchema);