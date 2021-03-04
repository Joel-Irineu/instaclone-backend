const express = require('express')

const routes = new express.Router()

routes.get("/", (req, res) =>{
    return res.send(`irineu, vc não sabe e nem eu!`)
})

module.exports = routes