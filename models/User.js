const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true},
    name: { type: String, required: true}
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema)