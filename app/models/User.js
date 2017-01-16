const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: { type: String, trim: true, unique: true, lowercase: true },
    password: { type: String, trim: true }
})

module.exports = mongoose.model('User', userSchema)