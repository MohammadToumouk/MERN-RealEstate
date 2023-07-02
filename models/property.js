const mongoose = require('mongoose');


const pointSchema = new mongoose.Schema({
    name: String,
    location: {
        type: {
            type: String,
            enum: ['Point']
            
        },
        coordinates: {
            type: [Number],
            
        }
    }
});

const propertySchema = new mongoose.Schema({
    title: {type: String, Unique: true, Required: true},
    description: {type: String, Required: true},
    price: {type: Number, Required: true},
    bedrooms: {type: Number, Required: true},
    area: {type: Number, Required: true},
    image: {type: String, Required: true},
    imaged: {type: [String]},
    owner:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    location: { type: pointSchema , index: '2dsphere'},
    availability: {type: String, enum: ['vacant', 'rented', 'sold'], default: 'vacant'},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Property', propertySchema);