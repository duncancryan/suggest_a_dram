// Imports
const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const createRouter = require("./helpers/create_router.js");

// Create Server
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
MongoClient.connect("mongodb://localhost:27017")
.then(client => {
    // Get connection details
    const db = client.db("whisky_database");
    const whiskyCollection = db.collection("whisky_collection");
    const whiskyRouter = createRouter(whiskyCollection);

    // Router
    app.use("/api/whiskies", whiskyRouter);
})
.catch(console.error);

// Run express server on port 3001
app.listen(3001, () => {
    console.log("Express server running: ", true);
    console.log("Port:", 3001)
});