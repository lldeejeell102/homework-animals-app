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
    try{
        await res.render("../views/index.ejs", {animals})
    } catch {
        console.log(err)
    }
})


// NEW
router.get("/new", async (req, res) => {
    try{
        await res.render("../views/new.ejs")
    } catch{
        console.log(err)
    }
})


// CREATE
router.post("/", async (req,res) => {
    try{
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
    } catch{
        console.log(err)
    }
})


// DESTROY
router.delete("/:id", async (req,res) => {
    try{
        const id = req.params.id
        // arr.splice(index, numOfItemToCut)
        animals.splice(id,1);
        // redirects to index
        await res.redirect("/animals")
    }catch{
        console.log(err)
    }
})
// test within curl
// curl -X DELETE localhost:3000/fruits/0


// EDIT
router.get("/:id/edit", async (req,res) => {
    try{
        const id = req.params.id
        const animal = animals[id]
        await res.render("../views/edit.ejs", {animal, id})
    }catch{
        console.log(err)
    }
})


// UPDATE
router.put("/:id", async (req,res) => {
    try{
        const id = req.params.id
        const body = req.body
        if (body.extinct === "on"){
            body.extinct = true
        } else {
            body.extinct = false
        }
        animals[id] = body
        await res.redirect("/animals")
    }catch{
        console.log(err)
    }
})


// SHOW
router.get("/:id", async (req, res) => {
    try{
        const id = req.params.id
        const animal = animals[id]
        await res.render("../views/show.ejs", {animal, id})
    }catch{
        console.log(err)
    }
})



// EXPORT THE ROUTER
module.exports = router