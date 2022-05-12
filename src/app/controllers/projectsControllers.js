const express = require('express')
const authMiddleware = require('../middlewares/auth')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

const router = express.Router()
const authConfig = require('../../config/auth.json')
router.use(authMiddleware)

router.get('/', (req, res)=>{
    res.send(
        { 
            ok: true,
            user: req.userId
        })
})



module.exports = app => app.use('/projects', router)