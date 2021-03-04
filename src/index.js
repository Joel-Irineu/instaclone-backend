const express = require('express')

const app = express()

app.get("/", (req, res) =>{
    return res.send(`irineu, vc não sabe e nem eu!`)
})

app.listen(3333)