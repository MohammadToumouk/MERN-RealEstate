const express = require('express');
const cors = require('cors');
const port = 5090;
require ("dotenv/config");
require("./db")


const app = express();
app.use(express.json());
app.use(cors());


app.listen(port, () => {
    console.log("Server is Running on Port:" + (port))
})