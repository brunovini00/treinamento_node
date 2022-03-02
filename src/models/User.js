const mongoose = require('../database/index')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    phone: {
        type: Number,
        unique: true
    },
    createdAt: {
        type: Date
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User