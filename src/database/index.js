const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/users'
mongoose.connect(uri).then(() => {
    console.log('Mongodb Conectado');
})

module.exports = mongoose