const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://root:jo2603@omnistack.q9hib.mongodb.net/semana07?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'))


app.listen(3333)