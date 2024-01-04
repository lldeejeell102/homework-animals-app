////////////////////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES
////////////////////////////////////////////////////////////////////////////////////////////
const mongoose = require("./connections.js")


// ANIMAL SCHEMA
const animalSchema = new mongoose.Schema({
    species: { type: String, required: true },
    extinct: Boolean,
    location: { type: String, required: true },
    lifeExpectancy: { type: Number, required: true },
}, {timestamps: true})

// compose our model from the schema
const Animal = mongoose.model("Animal", animalSchema)

// export our model
module.exports = Animal