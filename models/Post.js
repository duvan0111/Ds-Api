const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    category:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }],
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    date: {type: Date, required: true},
    title: { type: String, required: true},
    content: { type: String, required: true},
    resume: { type: String, required: true},
    status : {type: String, required: true}
})

module.exports = mongoose.model('Post', postSchema)