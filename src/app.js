

const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('rodando')
})

app.listen(3000,()=>{
    console.log('rodando');
    console.log('http://localhost:3000/');
})