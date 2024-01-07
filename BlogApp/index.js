const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT  || 3000;

//Middleware
app.use(express.json());

const blog = require("./routes/blog");

//Mount the routes
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT, () => {
    console.log(`APP is started at port no ${PORT}`);

})

app.get("/", (req, res) => {
    res.send(`<h1>This is homepage</h1>`)
})