const express = require('express')
const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = express.Router()


router.post('/register', async ( req, res)=>{
    const  { email } = req.body
    try {
        if (await User.findOne({ email })) 
            return res.status(400).send({ error: "Usuario já cadastrado" })
        const user = await User.create(req.body)
        
        console.log({user})
        user.password = undefined
        return res.send({user})
    } catch (err) {
        return res.status(400).send(err)
    }
})

router.post('/autheticate', async (req, res)=>{
    const { email , password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if(!user)
        return res.status(400).send({ error: 'Usuario não cadastrado' })

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha inválida' })
    user.password = undefined

    const token = jwt.sign({ id: user._id })
    res.send({ user })

})

module.exports = app => app.use('/auth', router)