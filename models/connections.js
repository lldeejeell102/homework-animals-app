require("dotenv").config() // get .env variables
const mongoose = require("mongoose") // imports mongoose

// Establish connections
mongoose.connect(process.env.DATABASE_URL)

// Connection Evenets
mongoose.connection
.on("open", () => {console.log("Connected to Mongo")})
.on("close", () => {console.log("Disconnected from Mongo")})
.on("error", (error) => {console.log(error)})

// export the mongoose object
module.exports = mongoose