///////////////////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES
///////////////////////////////////////////////////////////////////////////////////////////
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const animalsRouter = require("./controllers/animals-controller.js")


// import our fruits
// require will return the value of module.exports
const animals = require("./models/animals.js")

// create our app object
const app = express()




// MIDDLEWARE
app.use(express.static("public")) // use a "public" folder for files
// public/style.css -> /style.css
// public/app.js -> /app.js

// express.urlencoded (prase url encoded bodies)
// add the data to req.body
app.use(express.urlencoded({extended: true}))

// morgan - log data about each request for debugging
app.use(morgan("dev"))
// methodOverride - allows to override form post requests as a different method
// looks for a _method url query
app.use(methodOverride("_method"))

// Register our animalsRouter
app.use("/animals", animalsRouter)




// LISTENER
// server listener to turn our server
app.listen(4500, () => {
    console.log('listening on port 4500')
})