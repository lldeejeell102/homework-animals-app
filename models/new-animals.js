////////////////////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES
////////////////////////////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose")


// create our schema
const animalSchema = new mongoose.Schema({
    species: { type: String, required: true },
    extinct: Boolean,
    location: { type: String, required: true },
    species: { type: Number, required: true },
})

// compose our model from the schema
const Animal = mongoose.model("Animal", animalSchema)

// export our model
module.exports = Animal