const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    post:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    email: { type: String, required: true},
    content: { type: String, required: true},
    date: { type: Date, required: true},
})

module.exports = mongoose.model('Comment', commentSchema)