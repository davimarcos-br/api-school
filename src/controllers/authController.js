const express = require('express')
const User = require('../models/users')

const router = express.Router()


router.post('/register', async ( req, res)=>{
    try {
        const user = await User.create(req.body)
        //console.log(user)
        return res.send({user})
    } catch (err) {
        return res.status(400).send({error: 'falha no registro'})
    }
})

router.get('/1', (req, res)=>{
    res.send('teste')
})

module.exports = app => app.use('/auth', router)