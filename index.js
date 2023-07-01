const express = require('express');
const cors = require('cors');
const port = 5090;
require ("dotenv/config");
require("./db")

const userRouter = require("./routes/users");
const propertyRouter = require("./routes/properties");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/properties", propertyRouter)

app.listen(port, () => {
    console.log("Server is Running on Port:" + (port))
})