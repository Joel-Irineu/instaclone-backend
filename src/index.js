const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://root:jo2603@omnistack.q9hib.mongodb.net/semana07?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/", (req, res) =>{
    return res.send(`irineu, vc não sabe e nem eu!`)
})

app.listen(3333)