const express = require('express')
const Manager  = require('../models/manager')

const router = express.Router()

router.post('/register', async ( req, res)=>{
    const  { cpf } = req.body
    try {
        if (await Manager.findOne({ cpf })) 
            return res.status(400).send({ error: "Responsável já cadastrado" })
        const manager = await Manager.create(req.body)
        
        console.log({manager})
        

        return res.send({ 
            manager
        })

    } catch (err) {
        return res.status(400).send(err)
    }
})

router.get('/:userCPF',async (req, res)=>{
    const cpf  = req.params.userCPF
    const manager = await Manager.findOne({cpf})
    try {
            if (!manager) 
                return res.status(400).send({ error: "Responsável não encontrado" })
            
                             
            console.log({manager})
            
            return res.send({ 
            manager
            })


    } catch (err) {
        return res.status(400).send(err)
    }  
        
})

module.exports = app => app.use('/manager', router)