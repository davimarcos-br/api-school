const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: true }))

require('./controllers/authController')(app)

app.listen(3000,()=>{
    console.log('rodando');
    console.log('http://localhost:3000/');
})