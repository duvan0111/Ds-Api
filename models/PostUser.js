const mongoose = require('mongoose')

const postUserSchema = mongoose.Schema({
    post: {type:mongoose.Types.ObjectId, ref: "Post" },
    user: {type:mongoose.Types.ObjectId, ref: "User" },
    date: { type: Date, required: true},
})

module.exports = mongoose.model('PostUser', postUserSchema)