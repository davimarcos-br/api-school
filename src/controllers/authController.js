const express = require('express')
const User = require('../models/users')

const router = express.Router()


router.post('/register', async ( req, res)=>{
    try {
        const user = await User.create(req.body)
        
        console.log(req.body)
        return res.send(user)
    } catch (err) {
        return res.status(400).send(err)
    }
})

router.get('/register', (req, res)=>{
    res.send('teste')
})

module.exports = app => app.use('/auth', router)