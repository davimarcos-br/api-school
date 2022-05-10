const mongoose = require('../database')

const UserSchema = new mongoose.Schema({
    name: {type: String}
  

})
const User = mongoose.model('User', UserSchema) 

module.exports = User

