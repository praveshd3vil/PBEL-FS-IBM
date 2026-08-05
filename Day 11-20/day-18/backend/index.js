const express = require("express");
const cors = require("cors");
const { connection } = require("mongoose");
require('dotenv').config()

const app = express();
app.use(cors());


app.get("/", (req, res) => {
    res.send(`<h2 style="color:teal; text-align:center">Welcome to FS Server</h2>`);
});

const PORT = process.env.PORT;

app.listen(PORT, async() => {
    try {
        await connection
        console.log("Connection created between server and Db");
    } catch (error) {
         console.log(error);
    }
    console.log("Server is running on port", PORT)
})


