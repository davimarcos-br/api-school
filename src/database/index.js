const mongoose = require("mongoose")

main().catch(err => console.log(err))

async function main() {
    mongoose.Promise = global.Promise
    await mongoose.connect('mongodb://localhost:27017/dbapischool')
            .then(()=>{
                console.log('Banco de dados conectado')
                },
                err=>{
                    console.log('dadsod');
                }
            
            )
}
            

module.exports = mongoose 

