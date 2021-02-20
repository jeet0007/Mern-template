require("dotenv").config({ path: "congig.env" });
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const connectDB = require("./config/db");
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

connectDB();
//Serving react app
//Check what node env are we in 
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
} else {
    app.get('/', (req, res) => {
        res.send("Server running 👍");
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
