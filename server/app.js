require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://127.0.0.1:5500",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type', 
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./app/models");

db.mongoose.set('strictQuery', false);

db.mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit(1);
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Belajar Docker" });
});

// routes
require('./app/routes/main.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
