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
router.get("/", (req, res) => {
    res.render("../views/index.ejs", {animals})
})


// NEW
router.get("/new", (req, res) => {
    res.render("../views/new.ejs")
})


// CREATE
router.post("/", (req,res) => {
    const body = req.body
    if (body.extinct === "on"){
        body.extinct = true
    } else {
        body.extinct = false
    }
    // add the animal to the array
    animals.push(body)
    // redirect them to the index page
    res.redirect("/animals")
})


// DESTROY
router.delete("/:id", (req,res) => {
    const id = req.params.id
    // arr.splice(index, numOfItemToCut)
    animals.splice(id,1);
    // redirects to index
    res.redirect("/animals")
})
// test within curl
// curl -X DELETE localhost:3000/fruits/0


// EDIT
router.get("/:id/edit", (req,res) => {
    const id = req.params.id
    const animal = animals[id]

    res.render("../views/edit.ejs", {animal, id})
})


// UPDATE
router.put("/:id", (req,res) => {
    const id = req.params.id
    const body = req.body
    if (body.extinct === "on"){
        body.extinct = true
    } else {
        body.extinct = false
    }

    animals[id] = body
    res.redirect("/animals")
})


// SHOW
router.get("/:id", (req, res) => {
    const id = req.params.id
    const animal = animals[id]

    res.render("../views/show.ejs", {animal, id})
})



// EXPORT THE ROUTER
module.exports = router