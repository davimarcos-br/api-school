const express = require('express')
//const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

require('./controllers/authController')(app)
require('./controllers/projectsControllers')(app)

/* app.use('/', (req,res) =>{
    res.send({nome: "davi"})
    console.log('ok')
}) */

app.listen(3000,()=>{
    console.log('rodando');
    console.log('http://localhost:3000/');
})