
const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo api routes
app.use("/api/v1", todoRoutes);


//start the server
app.listen(PORT, () => {
    console.log(`server started successfuly at ${PORT}`);
  
})
//connect the databse
const dbConnect = require("./config/database");
dbConnect();

//Default Route
app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage</h1>`)
})
 