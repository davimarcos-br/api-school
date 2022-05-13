const mongoose = require('../../database')
const bcrypt = require('bcryptjs')

const ManagerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },

    alunos: {
        type: [String]
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

})

/* ManagerSchema.pre('save', async  function(next){
const hash = await bcrypt.hash(this.password, 10)
this.password = hash
next()
}) */

const Manager = mongoose.model('Manager', ManagerSchema,'users') 

module.exports = Manager

