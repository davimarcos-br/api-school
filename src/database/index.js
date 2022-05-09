const mongoose = require("mongoose")

main().catch(err => console.log(err));

async function main() {
    mongoose.Promise = global.Promise
    await mongoose.connect('mongodb://localhost:27017/test');
}

module.exports = mongoose 

