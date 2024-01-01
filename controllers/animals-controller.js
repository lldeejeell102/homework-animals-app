///////////////////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES
///////////////////////////////////////////////////////////////////////////////////////////
const express = require("express")
const router = express.Router()
const animals = require("../models/animals.js")


///////////////////////////////////////////////////////////////////////////////////////////
// ROUTES
///////////////////////////////////////////////////////////////////////////////////////////
// INDEX
router.get("/", async (req, res) => {
    await res.render("../views/index.ejs", {animals})
})


// NEW
router.get("/new", async (req, res) => {
    await res.render("../views/new.ejs")
})


// CREATE
router.post("/", async (req,res) => {
    const body = req.body
    if (body.extinct === "on"){
        body.extinct = true
    } else {
        body.extinct = false
    }
    // add the animal to the array
    animals.push(body)
    // redirect them to the index page
    await res.redirect("/animals")
})


// DESTROY
router.delete("/:id", async (req,res) => {
    const id = req.params.id
    // arr.splice(index, numOfItemToCut)
    animals.splice(id,1);
    // redirects to index
    await res.redirect("/animals")
})
// test within curl
// curl -X DELETE localhost:3000/fruits/0


// EDIT
router.get("/:id/edit", async (req,res) => {
    const id = req.params.id
    const animal = animals[id]
    await res.render("../views/edit.ejs", {animal, id})
})


// UPDATE
router.put("/:id", async (req,res) => {
    const id = req.params.id
    const body = req.body
    if (body.extinct === "on"){
        body.extinct = true
    } else {
        body.extinct = false
    }
    animals[id] = body
    await res.redirect("/animals")
})


// SHOW
router.get("/:id", async (req, res) => {
    const id = req.params.id
    const animal = animals[id]
    await res.render("../views/show.ejs", {animal, id})
})



// EXPORT THE ROUTER
module.exports = router