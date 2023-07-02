const Property = require("../models/property");

const createProperty = async(req,res) => {
    try {
       const { body } = req;
       const property = await Property.create(body)
       res.status(201).json(property)     
    } catch (error) {
        console.log(error)
    }
}

const getAllProperties = async(req,res) => {
    try {  
       const property = await Property.find({}).populate('owner');
       res.status(200).json(property)    
    } catch (error) {
        console.log(error)
    }
}

const getProperty = async(req,res) => {
    try {  
        const{
            params: {id},
        } = req
       const property = await Property.findById(id).populate('owner');
       res.status(200).json(property)    
    } catch (error) {
        console.log(error)
    }
}

const getNearbyProperties = async (req, res) => {
    try {
      const { lng, lat, distance } = req.query;
      console.log(req.query);
      const property = await Property.find({
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [parseFloat(lng), parseFloat(lat)],
            },
            $maxDistance: parseFloat(distance),
          },
        },
      });
      res.status(200).json(property);
    } catch (error) {
      console.log(error);
    }
  };


module.exports = {
    createProperty,
    getAllProperties,
    getProperty,
    getNearbyProperties
}