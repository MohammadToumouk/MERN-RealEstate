const express = require('express');
const { createProperty, getNearbyProperties } = require('../controllers/properties')
const { getAllProperties } = require('../controllers/properties')
const { getProperty } = require('../controllers/properties')

const propertyRouter = express.Router();

propertyRouter.post("/", createProperty);
propertyRouter.get("/", getAllProperties);
propertyRouter.get("/:id", getProperty);
propertyRouter.get("/nearby", getNearbyProperties)

module.exports = propertyRouter;