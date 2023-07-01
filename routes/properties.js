const express = require('express');
const { createProperty } = require('../controllers/properties')
const { getAllProperties } = require('../controllers/properties')
const { getProperty } = require('../controllers/properties')

const propertyRouter = express.Router();

propertyRouter.post("/", createProperty);
propertyRouter.get("/", getAllProperties);
propertyRouter.get("/:id", getProperty);

module.exports = propertyRouter;