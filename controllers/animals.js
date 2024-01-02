///////////////////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES
///////////////////////////////////////////////////////////////////////////////////////////
const express = require("express")
const Animal = require("../models/animal.js")

const router = express.Router()

///////////////////////////////////////////////////////////////////////////////////////////
// ERROR HANDLER
///////////////////////////////////////////////////////////////////////////////////////////
function errorHandler(error, res){
    res.json(error)
}

//65949a0335163e2d4cfc86f5
///////////////////////////////////////////////////////////////////////////////////////////
// ROUTES -- INDUCES(S)
///////////////////////////////////////////////////////////////////////////////////////////
// SEED
router.get("/seed", async (req, res) => {
    await Animal.deleteMany({})
    const animals = await Animal.create([
        {species: "Squirrel", extinct: false, location: "North America", lifeExpectancy: 50},
        {species: "Frog", extinct: false, location: "North America", lifeExpectancy: 5},
        {species: "Dog", extinct: false, location: "North America", lifeExpectancy: 15}
    ]).catch((error) => errorHandler(error, res))
    res.json(animals)
})

// INDEX
router.get("/", async (req, res) => {
        const animals = await Animal.find({}).catch((error) => errorHandler(error, res))
        res.render("index.ejs", {animals})
})


// NEW
router.get("/new", async (req, res) => {
    await res.render("new.ejs").catch((error) => errorHandler(error, res))
})


// DELETE - Delete
router.delete("/:id", async (req,res) => {
    await Animal.findByIdAndDelete(req.params.id).catch((error) => errorHandler(error, res))
    res.redirect("/animals")
})


// // CREATE
// router.post("/", async (req,res) => {
//     try{
//         const body = req.body
//         if (body.extinct === "on"){
//             body.extinct = true
//         } else {
//             body.extinct = false
//         }
//         // add the animal to the array
//         animals.push(body)
//         // redirect them to the index page
//         await res.redirect("/animals")
//     } catch{
//         console.log(err)
//     }
// })




// // EDIT
// router.get("/:id/edit", async (req,res) => {
//     try{
//         const id = req.params.id
//         const animal = animals[id]
//         await res.render("edit.ejs", {animal, id})
//     }catch{
//         console.log(err)
//     }
// })


// // UPDATE
// router.put("/:id", async (req,res) => {
//     try{
//         const id = req.params.id
//         const body = req.body
//         if (body.extinct === "on"){
//             body.extinct = true
//         } else {
//             body.extinct = false
//         }
//         animals[id] = body
//         await res.redirect("/animals")
//     }catch{
//         console.log(err)
//     }
// })


// SHOW - Get
router.get("/:id", async (req, res) => {
        const animal = await Animal.findById(req.params.id).catch((error) => errorHandler(error, res))
        res.render("show.ejs", {animal})
})



// EXPORT THE ROUTER
module.exports = router